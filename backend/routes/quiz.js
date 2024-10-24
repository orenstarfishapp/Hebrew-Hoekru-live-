const express = require('express');
const router = express.Router();
const session = require('express-session'); // For session management
const random = require('lodash.random'); // Use lodash for random selection

// router.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true,
// }));

module.exports = (db) => {
    router.get('/get_question', (req, res) => {
        db.all('SELECT * FROM quiz_questions', [], (err, questions) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (!questions.length) {
                return res.status(404).json({ error: 'No questions available' });
            }
    
            const sessionQuestions = req.session.asked_questions || [];
            const availableQuestions = questions.filter(q => !sessionQuestions.includes(q.id));
    
            if (!availableQuestions.length) {
                req.session.asked_questions = [];
                availableQuestions = questions;
            }
    
            const question = availableQuestions[random(0, availableQuestions.length - 1)];
            sessionQuestions.push(question.id);
            req.session.asked_questions = sessionQuestions;
    
            const answers = [
                question.correct_answer,
                question.wrong_answer1,
                question.wrong_answer2,
                question.wrong_answer3
            ];
    
            res.json({
                question_he: question.question_he,
                question_en: question.question_en,
                answers: answers.sort(() => Math.random() - 0.5), // Shuffle answers
                correct_answer: question.correct_answer
            });
        });
    });
    
    // Submit an answer
    router.post('/submit_answer', (req, res) => {
        const { answer, correct_answer } = req.body;
    
        if (answer === correct_answer) {
            return res.json({ result: 'correct' });
        } else {
            return res.json({ result: 'incorrect' });
        }
    });
    return router;
};
