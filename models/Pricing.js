// import { DataTypes } from 'sequelize';
// import sequelize from './sequelize.js';

// export const Pricing = sequelize.define('Pricing', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   organization_id: {
//     type: DataTypes.INTEGER,
//     references: { model: 'organizations', key: 'id' },
//     allowNull: false,
//   },
//   item_id: {
//     type: DataTypes.INTEGER,
//     references: { model: 'items', key: 'id' },
//     allowNull: false,
//   },
//   zone: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   base_distance_in_km: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   km_price: {
//     type: DataTypes.DECIMAL(5, 2),
//     allowNull: false,
//   },
//   fix_price: {
//     type: DataTypes.DECIMAL(5, 2),
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
//   tableName: 'pricing',
// });


const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Pricing = sequelize.define('Pricing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  organizationId: {
    type: DataTypes.INTEGER,
    references: { model: 'organizations', key: 'id' },
    allowNull: false,
    field: 'organization_id', // We use the field option to specify the actual DB column name
  },
  itemId: {
    type: DataTypes.INTEGER,
    references: { model: 'items', key: 'id' },
    allowNull: false,
    field: 'item_id', // We use the field option to specify the actual DB column name
  },
  zone: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  baseDistanceInKm: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'base_distance_in_km', // We use the field option to specify the actual DB column name
  },
  kmPrice: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    field: 'km_price', // We use the field option to specify the actual DB column name
  },
  fixPrice: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    field: 'fix_price', // We use the field option to specify the actual DB column name
  },
}, {
  timestamps: false,
  tableName: 'pricing', // The table name remains in snake_case because it refers to the actual database table name.
});

module.exports = {Pricing};
