const express = require('express');

const router = express.Router();

// Get About page content
router.get('/', (req, res) => {
    res.json({ message: 'About us page content' }); // Replace with actual content as needed
});

module.exports = router;
