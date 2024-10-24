const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.get('/', (req, res) => {
        db.all('SELECT * FROM contacts', [], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        });
    });
    
    // Create a new contact
    router.post('/', (req, res) => {
        const { name, email, message } = req.body;
        db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message], function (err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.status(201).json({ id: this.lastID, name, email, message });
            }
        });
    });
    return router;
};
