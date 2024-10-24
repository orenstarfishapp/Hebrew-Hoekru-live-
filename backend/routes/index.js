const express = require('express');
const usersRoutes = require('./users');
const coursesRoutes = require('./courses');
const contactsRoutes = require('./contacts');
const bookingsRoutes = require('./bookings'); 
const baseRoutes = require('./base');
const aboutRoutes = require('./about');
const blogRoutes = require('./blog');
const classSessionsRoutes = require('./classSessions')
const quizRoutes = require('./quiz');
const paymentsRoutes = require('./payments');

module.exports = (db) => {
    const router = express.Router();

    router.use('/', baseRoutes(db));
    router.use('/courses', coursesRoutes(db));
    router.use('/contacts', contactsRoutes(db));
    router.use('/bookings', bookingsRoutes(db));
    router.use('/about', aboutRoutes);
    router.use('/blog', blogRoutes(db));
    router.use('/', usersRoutes(db));
    router.use('/class_sessions', classSessionsRoutes(db)); 
    router.use('/quiz', quizRoutes(db)); 
    router.use('/payments', paymentsRoutes);
    return router;
};
