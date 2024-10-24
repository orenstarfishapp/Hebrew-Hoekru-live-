// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your Sequelize instance

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(64),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(120),
        unique: true,
        allowNull: false
    },
    password_hash: {
        type: DataTypes.STRING(256),
        allowNull: false // Require a password hash
    },
    date_registered: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Set default to current timestamp
    }
});


// You can add custom methods here
User.prototype.setPassword = function(password) {
    this.password_hash = bcrypt.hashSync(password, 10); // Hash password
};

User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password_hash); // Check password
};

module.exports = User;
