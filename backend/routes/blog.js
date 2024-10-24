const express = require('express');

const router = express.Router();

module.exports = (db) => {
    router.get('/', (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const perPage = 5;
        const offset = (page - 1) * perPage;
    
        db.all('SELECT * FROM blog_posts ORDER BY date_posted DESC LIMIT ? OFFSET ?', [perPage, offset], (err, rows) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.json(rows);
            }
        });
    });
    return router;
};
