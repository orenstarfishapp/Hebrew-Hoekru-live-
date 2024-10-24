const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.get('/', (req, res) => {
        db.all(`
        SELECT class_sessions.*, courses.name AS course_name 
        FROM class_sessions 
        JOIN courses ON class_sessions.course_id = courses.id 
        ORDER BY class_sessions.date
    `, [], (err, sessions) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.json(sessions);
        });
    });
    return router;
};
