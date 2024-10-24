const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db'); 

db.serialize(() => {
    // Create users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT,
        date_registered DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create courses table
    db.run(`CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title_he TEXT NOT NULL,
        title_en TEXT NOT NULL,
        description_he TEXT NOT NULL,
        description_en TEXT NOT NULL,
        level_he TEXT NOT NULL,
        level_en TEXT NOT NULL,
        price REAL NOT NULL
    )`);

    // Create blog posts table
    db.run(`CREATE TABLE IF NOT EXISTS blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title_he TEXT NOT NULL,
        title_en TEXT NOT NULL,
        content_he TEXT NOT NULL,
        content_en TEXT NOT NULL,
        date_posted DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create contacts table
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        date_sent DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create class sessions table
    db.run(`CREATE TABLE IF NOT EXISTS class_sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        course_id INTEGER NOT NULL,
        date DATETIME NOT NULL,
        max_students INTEGER NOT NULL,
        FOREIGN KEY (course_id) REFERENCES courses(id)
    )`);

    // Create bookings table
    db.run(`CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        class_session_id INTEGER NOT NULL,
        booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        payment_status TEXT DEFAULT 'pending',
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (class_session_id) REFERENCES class_sessions(id)
    )`);

    // Create quiz questions table
    db.run(`CREATE TABLE IF NOT EXISTS quiz_questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_he TEXT NOT NULL,
        question_en TEXT NOT NULL,
        correct_answer TEXT NOT NULL,
        wrong_answer1 TEXT NOT NULL,
        wrong_answer2 TEXT NOT NULL,
        wrong_answer3 TEXT NOT NULL
    )`);
});

// Close the database connection (optional)
db.close();
