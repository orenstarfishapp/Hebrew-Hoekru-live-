const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class BlogPost extends Model {}

BlogPost.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title_he: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    title_en: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    content_he: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    content_en: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date_posted: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'BlogPost',
    timestamps: false,
});

module.exports = BlogPost;
