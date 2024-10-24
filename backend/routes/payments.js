const express = require('express');
const stripe = require('stripe')('STRIPE_SECRET_API'); // Initialize Stripe with your secret key
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth'); // Middleware to check authentication

module.exports = (db) => {
    router.route('/payment/:courseId')
        .get(isAuthenticated, (req, res) => {
            const courseId = req.params.courseId;

            db.get('SELECT * FROM courses WHERE id = ?', [courseId], (err, course) => {
                if (err) {
                    return res.status(500).send(err.message);
                }
                if (!course) {
                    return res.status(404).send('Course not found');
                }
                res.json({ course, stripe_public_key: 'STRIPE_PUBLIC_KEY' }); // Return course details and public key
            });
        })
        .post(isAuthenticated, (req, res) => {
            const courseId = req.params.courseId;

            db.get('SELECT * FROM courses WHERE id = ?', [courseId], (err, course) => {
                if (err) {
                    return res.status(500).send(err.message);
                }
                if (!course) {
                    return res.status(404).send('Course not found');
                }

                // Create Stripe customer and payment intent
                stripe.customers.create({ email: req.user.email })
                    .then(customer => {
                        return stripe.paymentIntents.create({
                            amount: Math.round(course.price * 100), // Price in cents
                            currency: 'usd',
                            customer: customer.id,
                            metadata: { course_id: course.id }
                        });
                    })
                    .then(intent => {
                        res.json({ client_secret: intent.client_secret });
                    })
                    .catch(err => {
                        res.status(500).send(err.message);
                    });
            });
        });

    // Payment success route
    router.get('/payment_success', isAuthenticated, (req, res) => {
        const courseId = req.query.course_id;

        db.get('SELECT * FROM courses WHERE id = ?', [courseId], (err, course) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (!course) {
                return res.status(404).send('Course not found');
            }

            db.run('INSERT INTO bookings (user_id, course_id) VALUES (?, ?)', [req.user.id, course.id], function (err) {
                if (err) {
                    return res.status(500).send(err.message);
                }
                res.json({ message: 'תשלום התקבל בהצלחה ונרשמת לקורס!' });
            });
        });
    });

    // Payment cancel route
    router.get('/payment_cancel', (req, res) => {
        req.flash('warning', 'התשלום בוטל.'); // Assuming you have set up flash messages
        res.redirect('/courses'); // Redirect to courses route
    });
    return router;
};
