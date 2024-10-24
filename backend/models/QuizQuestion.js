const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class QuizQuestion extends Model {}

QuizQuestion.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    question_he: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    question_en: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    correct_answer: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    wrong_answer1: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    wrong_answer2: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    wrong_answer3: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'QuizQuestion',
    timestamps: false,
});

module.exports = QuizQuestion;
