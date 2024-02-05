// import { DataTypes } from 'sequelize';
// import sequelize from './sequelize.js';

// export const Item = sequelize.define('Item', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   type: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
//   tableName: 'items',
// });

const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'items',
});

module.exports = {Item};
