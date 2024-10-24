const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middleware/auth'); 
module.exports = (db) => {
    router.post('/book_class/:sessionId', isAuthenticated, (req, res) => {
        const sessionId = req.params.sessionId;
    
        db.get('SELECT * FROM class_sessions WHERE id = ?', [sessionId], (err, session) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (!session) {
                return res.status(404).send('Session not found');
            }
    
            // Check if the session is full
            if (session.current_bookings < session.max_students) {
                // Logic to create a booking (assuming you have a bookings table)
                db.run('INSERT INTO bookings (user_id, class_session_id) VALUES (?, ?)', [req.user.id, sessionId], function(err) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }
                    return res.json({ message: 'Booking successful', bookingId: this.lastID });
                });
            } else {
                return res.status(400).json({ message: 'מצטערים, השיעור מלא.' });
            }
        });
    });
    
    // Render the booking page for a session (GET)
    router.get('/book_class/:sessionId', (req, res) => {
        const sessionId = req.params.sessionId;
    
        db.get('SELECT * FROM class_sessions WHERE id = ?', [sessionId], (err, session) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (!session) {
                return res.status(404).send('Session not found');
            }
            res.json(session); // You might want to render a view here or send session details as JSON
        });
    });
    
    
    router.get('/my_bookings', isAuthenticated, (req, res) => {
        db.all(`
            SELECT bookings.*, class_sessions.date, courses.name AS course_name 
            FROM bookings 
            JOIN class_sessions ON bookings.class_session_id = class_sessions.id 
            JOIN courses ON class_sessions.course_id = courses.id 
            WHERE bookings.user_id = ?
            ORDER BY class_sessions.date
        `, [req.user.id], (err, bookings) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.json(bookings);
        });
    });
    return router;
};
