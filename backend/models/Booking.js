const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const ClassSession = require('./ClassSession');

class Booking extends Model {}

Booking.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    class_session_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ClassSession,
            key: 'id',
        },
        allowNull: false,
    },
    booking_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    payment_status: {
        type: DataTypes.STRING(20),
        defaultValue: 'pending',
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Booking',
    timestamps: false,
});

// Define associations
Booking.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Booking, { foreignKey: 'user_id' });

Booking.belongsTo(ClassSession, { foreignKey: 'class_session_id' });
ClassSession.hasMany(Booking, { foreignKey: 'class_session_id' });

module.exports = Booking;
