const express = require('express');

const router = express.Router();

module.exports = (db) =>{
    router.get('/', (req, res) => {
        db.all('SELECT * FROM courses LIMIT 3', [], (err, featuredCourses) => {
            if (err) return res.status(500).send(err.message);
    
            db.all('SELECT * FROM blog_posts ORDER BY date_posted DESC LIMIT 3', [], (err, latestPosts) => {
                if (err) return res.status(500).send(err.message);
    
                const testimonials = [
                    { author: "שרה כהן", content: "הקורסים כאן עזרו לי להתקדם בעברית בצורה מדהימה!" },
                    { author: "דוד לוי", content: "המורים מעולים והשיטה עובדת. ממליץ בחום!" }
                ];
    
                res.json({ featured_courses: featuredCourses, posts: latestPosts, testimonials });
            });
        });
    });
    return router;
};
