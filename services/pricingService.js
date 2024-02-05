// import { Pricing } from '../models/Pricing.js';
// import { Item } from '../models/Item.js';

// class PricingNotFoundError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'PricingNotFoundError';
//   }
// }

// export const calculateDeliveryCost = async ({
//   zone, organization_id, total_distance, item_type,
// }) => {
//   try {
//     const pricingRules = await Pricing.findOne({
//       where: { zone, organization_id: Number(organization_id) }, // Ensure org ID is a number
//       include: [{ model: Item, where: { type: item_type }, required: true }],
//     });

//     if (!pricingRules) {
//       throw new PricingNotFoundError('Pricing rules not found for the given parameters.');
//     }

//     const base_distance_in_km = parseFloat(pricingRules.base_distance_in_km);
//     const km_price = parseFloat(pricingRules.km_price);
//     const fix_price = parseFloat(pricingRules.fix_price);
//     const distance = parseFloat(total_distance);

//     const totalCost = fix_price + Math.max(0, distance - base_distance_in_km) * km_price;

//     return { total_price: totalCost.toFixed(2) };
//   } catch (error) {
//     console.error('Error calculating delivery cost:', error);
//     throw error;
//   }
// };
const {Pricing} = require('../models/Pricing');
const { Item } = require('../models/Item');
const sequelize = require('../models/sequelize')

class PricingNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PricingNotFoundError';
  }
}

const calculateDeliveryCost = async ({
  zone,
  organization_id, // assuming the camelCase conversion is applicable
  total_distance,
  item_type,
}) => {
  try {
    const pricingRules = await Pricing.findOne({
      where: { zone, organization_id: Number(organization_id) }, // Kept snake_case for DB column
      include: [{ model: Item, where: { type: item_type }, required: true }], // Kept snake_case for DB column
    });

    if (!pricingRules) {
      throw new PricingNotFoundError('Pricing rules not found for the given parameters.');
    }

    const baseDistanceInKm = parseFloat(pricingRules.baseDistanceInKm); // Kept snake_case for DB column
    const kmPrice = parseFloat(pricingRules.kmPrice); // Kept snake_case for DB column
    const fixPrice = parseFloat(pricingRules.fixPrice); // Kept snake_case for DB column
    const distance = parseFloat(total_distance);

    const totalCost = fixPrice + Math.max(0, distance - baseDistanceInKm) * kmPrice;
    return { total_price: (Math.round(totalCost * 100) / 100) }; // Kept snake_case for consistency with response format
  } catch (error) {
    // console.error('Error calculating delivery cost:', error);
    throw error;
  }
};

module.exports = { calculateDeliveryCost };
