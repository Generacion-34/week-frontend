const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Todo = sequelize.define('todo', {
  campo1: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Todo;