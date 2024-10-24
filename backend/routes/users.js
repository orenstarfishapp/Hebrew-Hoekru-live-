const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Optional: If you want to use JWT for authentication
const router = express.Router();

module.exports = (db) => {
    router.post('/login', (req, res) => {
        const { username, password } = req.body;
    
        // Check if user is already authenticated (you can implement session logic)
        if (req.user) { // Assume req.user is set when authenticated
            return res.redirect('/');
        }
    
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (!user || !bcrypt.compareSync(password, user.password_hash)) {
                return res.status(401).json({ message: 'התחברות נכשלה. אנא בדוק את שם המשתמש והסיסמה.' });
            }
            
            // Logic to log in the user (set session or token)
            // Example with JWT:
            const token = jwt.sign({ id: user.id }, 'your_jwt_secret'); // Replace with your secret
            res.status(200).json({ message: 'התחברת בהצלחה!', user : user, token });
        });
    });
    
    // Logout route
    router.post('/logout', (req, res) => {
        // Logic to log out the user (e.g., clear the session or token)
        req.session = null; // Clear session
        res.json({ message: 'התנתקת בהצלחה.' });
    });
    
    // Register route
    router.post('/register', (req, res) => {
        console.log("adsfdjflskdjflaksdf");
        const { username, email, password } = req.body;
    
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, existingUser) => {
            if (err) {
                console.log("error1");
                return res.status(500).send(err.message);
            }
            if (existingUser) {
                return res.status(400).json({ message: 'שם המשתמש כבר קיים. אנא בחר שם משתמש אחר.' });
            }
    
            const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password
            db.run('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', [username, email, hashedPassword], function (err) {
                if (err) {
                    console.log("error2");
                    console.log(err);
                    return res.status(500).send(err.message);
                }
                res.status(201).json({ message: 'הרשמתך הושלמה בהצלחה! כעת תוכל להתחבר.' });
            });
        });
    });
    return router;
};
