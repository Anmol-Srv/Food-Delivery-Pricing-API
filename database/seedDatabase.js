// import sequelize from './models/sequelize.js'; // Ensure this path matches your project structure
// import { Organization } from './models/Organization.js';
// import { Item } from './models/Item.js';
// import { Pricing } from './models/Pricing.js';

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true }); // Warning: This drops and recreates tables

//   // Seed Organizations with more examples
//   const organizations = await Organization.bulkCreate([
//     { name: 'Viga Entertainment' },
//     { name: 'Gourmet Foods' },
//     { name: 'Quick Bites' },
//     { name: 'Healthy Eats' },
//     { name: 'Dessert Central' },
//   ]);

//   // Seed Items with a wider range of types and descriptions
//   const items = await Item.bulkCreate([
//     { type: 'perishable', description: 'Fresh Pizza' },
//     { type: 'non-perishable', description: 'Canned Soup' },
//     { type: 'perishable', description: 'Organic Salad' },
//     { type: 'perishable', description: 'Ice Cream' },
//     { type: 'non-perishable', description: 'Whole Bean Coffee' },
//   ]);

//   // Seed Pricing with varied rules across different organizations and items
//   await Pricing.bulkCreate([
//     {
//       organization_id: 1, item_id: 1, zone: 'central', base_distance_in_km: 5, km_price: 1.5, fix_price: 10,
//     },
//     {
//       organization_id: 1, item_id: 2, zone: 'central', base_distance_in_km: 3, km_price: 1.0, fix_price: 7,
//     },
//     {
//       organization_id: 2, item_id: 3, zone: 'suburban', base_distance_in_km: 8, km_price: 2.0, fix_price: 12,
//     },
//     {
//       organization_id: 3, item_id: 4, zone: 'rural', base_distance_in_km: 10, km_price: 2.5, fix_price: 15,
//     },
//     {
//       organization_id: 4, item_id: 5, zone: 'central', base_distance_in_km: 5, km_price: 1.2, fix_price: 8,
//     },
//     {
//       organization_id: 5, item_id: 4, zone: 'suburban', base_distance_in_km: 7, km_price: 2.2, fix_price: 9,
//     },
//     // Adding more variations
//     {
//       organization_id: 1, item_id: 5, zone: 'rural', base_distance_in_km: 15, km_price: 3.0, fix_price: 20,
//     },
//     {
//       organization_id: 2, item_id: 1, zone: 'suburban', base_distance_in_km: 6, km_price: 1.8, fix_price: 11,
//     },
//     {
//       organization_id: 3, item_id: 2, zone: 'central', base_distance_in_km: 4, km_price: 1.1, fix_price: 6,
//     },
//     {
//       organization_id: 4, item_id: 3, zone: 'rural', base_distance_in_km: 12, km_price: 3.5, fix_price: 18,
//     },
//     {
//       organization_id: 5, item_id: 1, zone: 'central', base_distance_in_km: 5, km_price: 2.0, fix_price: 10,
//     },
//   ]);

//   console.log('Database seeded successfully.');
// };

// seedDatabase().catch(console.error);


const sequelize = require('../models/sequelize'); // Ensure this path matches your project structure
const { Organization } = require('../models/Organization');
const { Item } = require('../models/Item');
const { Pricing } = require('../models/Pricing');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // Warning: This drops and recreates tables

  // Seed Organizations with more examples
  const organizations = await Organization.bulkCreate([
    { name: 'Viga Entertainment' },
    { name: 'Gourmet Foods' },
    { name: 'Quick Bites' },
    { name: 'Healthy Eats' },
    { name: 'Dessert Central' },
  ]);

  // Seed Items with a wider range of types and descriptions
  const items = await Item.bulkCreate([
    { type: 'perishable', description: 'Fresh Pizza' },
    { type: 'non-perishable', description: 'Canned Soup' },
    { type: 'perishable', description: 'Organic Salad' },
    { type: 'perishable', description: 'Ice Cream' },
    { type: 'non-perishable', description: 'Whole Bean Coffee' },
  ]);

  // Seed Pricing with varied rules across different organizations and items
  await Pricing.bulkCreate([
    {
      organization_id: 1, item_id: 1, zone: 'central', base_distance_in_km: 5, km_price: 1.5, fix_price: 10,
    },
    {
      organization_id: 1, item_id: 2, zone: 'central', base_distance_in_km: 3, km_price: 1.0, fix_price: 7,
    },
    {
      organization_id: 2, item_id: 3, zone: 'suburban', base_distance_in_km: 8, km_price: 2.0, fix_price: 12,
    },
    {
      organization_id: 3, item_id: 4, zone: 'rural', base_distance_in_km: 10, km_price: 2.5, fix_price: 15,
    },
    {
      organization_id: 4, item_id: 5, zone: 'central', base_distance_in_km: 5, km_price: 1.2, fix_price: 8,
    },
    {
      organization_id: 5, item_id: 4, zone: 'suburban', base_distance_in_km: 7, km_price: 2.2, fix_price: 9,
    },
    // Adding more variations
    {
      organization_id: 1, item_id: 5, zone: 'rural', base_distance_in_km: 15, km_price: 3.0, fix_price: 20,
    },
    {
      organization_id: 2, item_id: 1, zone: 'suburban', base_distance_in_km: 6, km_price: 1.8, fix_price: 11,
    },
    {
      organization_id: 3, item_id: 2, zone: 'central', base_distance_in_km: 4, km_price: 1.1, fix_price: 6,
    },
    {
      organization_id: 4, item_id: 3, zone: 'rural', base_distance_in_km: 12, km_price: 3.5, fix_price: 18,
    },
    {
      organization_id: 5, item_id: 1, zone: 'central', base_distance_in_km: 5, km_price: 2.0, fix_price: 10,
    },
  ]);

  console.log('Database seeded successfully.');
};

seedDatabase().catch(console.error);

