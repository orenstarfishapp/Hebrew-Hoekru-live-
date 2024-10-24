// config/database.js
const { Sequelize } = require('sequelize');

// Initialize a Sequelize instance with SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/data.db', // Path to your SQLite database file
});

// Test the database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Call the test function to verify the connection
testConnection();

module.exports = sequelize;
