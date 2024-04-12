const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ToDo = sequelize.define('todo', {
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCompleted: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //userId
});

module.exports = ToDo;