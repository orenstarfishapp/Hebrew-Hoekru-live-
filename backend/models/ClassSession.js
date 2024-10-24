const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');

class ClassSession extends Model {}

ClassSession.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id',
        },
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    max_students: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'ClassSession',
    timestamps: false,
});

// Define associations
ClassSession.belongsTo(Course, { foreignKey: 'course_id' });
Course.hasMany(ClassSession, { foreignKey: 'course_id' });

module.exports = ClassSession;
