// import { Organization } from './Organization.js';
// import { Item } from './Item.js';
// import { Pricing } from './Pricing.js';

// Organization.hasMany(Pricing, {
//   foreignKey: 'organization_id',
// });

// Pricing.belongsTo(Organization, {
//   foreignKey: 'organization_id',
// });

// Item.hasMany(Pricing, {
//   foreignKey: 'item_id',
// });

// Pricing.belongsTo(Item, {
//   foreignKey: 'item_id',
// });

// export { Organization, Item, Pricing };


const {Organization} = require('./Organization');
const {Item} = require('./Item');
const {Pricing} = require('./Pricing');

Organization.hasMany(Pricing, {
  foreignKey: 'organization_id', // Database column names remain in snake_case
});

Pricing.belongsTo(Organization, {
  foreignKey: 'organization_id', // Database column names remain in snake_case
});

Item.hasMany(Pricing, {
  foreignKey: 'item_id', // Database column names remain in snake_case
});

Pricing.belongsTo(Item, {
  foreignKey: 'item_id', // Database column names remain in snake_case
});

module.exports = { Organization, Item, Pricing };
