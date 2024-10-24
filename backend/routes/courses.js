const express = require('express');
const router = express.Router();

// Get all courses


module.exports = (db) => {
    router.get('/', (req, res) => {
        db.all('SELECT * FROM courses', [], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        });
    });

    // Create a new course
    router.post('/', (req, res) => {
        const { title, description, price } = req.body;
        db.run('INSERT INTO courses (title, description, price) VALUES (?, ?, ?)', [title, description, price], function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.status(201).json({ id: this.lastID, title, description, price });
            }
        });
    });
    return router;
};
