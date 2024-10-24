// models/Course.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Course extends Model {}

Course.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title_he: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title_en: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description_he: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description_en: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    level_he: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level_en: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Course',
    timestamps: false, // Disable timestamps if not needed
});

module.exports = Course;
