// import { DataTypes } from 'sequelize';
// import sequelize from './sequelize.js';

// export const Organization = sequelize.define('Organization', {
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// });
import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

export const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'organizations',
});
