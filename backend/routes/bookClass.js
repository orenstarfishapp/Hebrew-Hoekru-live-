const express = require('express');
const db = require('../db');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();

router.post('/book_class/:session_id', isAuthenticated, (req, res) => {
    const sessionId = req.params.session_id;
    const userId = req.user.id; 
    db.get(`SELECT * FROM class_sessions WHERE id = ?`, [sessionId], (err, session) => {
        if (err || !session) {
            return res.status(404).json({ message: 'Class session not found.' });
        }
        db.all(`SELECT COUNT(*) as count FROM bookings WHERE session_id = ?`, [sessionId], (err, countResult) => {
            if (err) {
                return res.status(500).json({ message: 'Server error' });
            }

            const currentBookings = countResult[0].count;

            if (currentBookings < session.max_students) {
                return res.redirect(`/payment/${session.course_id}`); 
            } else {
                return res.status(400).json({ message: 'Sorry, the class is full.' });
            }
        });
    });
});

router.get('/book_class/:session_id', isAuthenticated, (req, res) => {
    const sessionId = req.params.session_id;

    db.get(`SELECT * FROM class_sessions WHERE id = ?`, [sessionId], (err, session) => {
        if (err || !session) {
            return res.status(404).json({ message: 'Class session not found.' });
        }
        res.json(session); 
    });
});

module.exports = router;
