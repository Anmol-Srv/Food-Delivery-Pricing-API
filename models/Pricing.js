import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

export const Pricing = sequelize.define('Pricing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  organization_id: {
    type: DataTypes.INTEGER,
    references: { model: 'organizations', key: 'id' },
    allowNull: false,
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: { model: 'items', key: 'id' },
    allowNull: false,
  },
  zone: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  base_distance_in_km: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  km_price: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  fix_price: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'pricing',
});
