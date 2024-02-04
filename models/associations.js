import { Organization } from './Organization.js';
import { Item } from './Item.js';
import { Pricing } from './Pricing.js';

Organization.hasMany(Pricing, {
  foreignKey: 'organization_id',
});

Pricing.belongsTo(Organization, {
  foreignKey: 'organization_id',
});

Item.hasMany(Pricing, {
  foreignKey: 'item_id',
});

Pricing.belongsTo(Item, {
  foreignKey: 'item_id',
});

export { Organization, Item, Pricing };


