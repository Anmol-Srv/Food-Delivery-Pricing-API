import { Pricing } from '../models/Pricing.js';
import { Item } from '../models/Item.js';

class PricingNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PricingNotFoundError';
  }
}

export const calculateDeliveryCost = async ({
  zone, organization_id, total_distance, item_type,
}) => {
  try {
    const pricingRules = await Pricing.findOne({
      where: { zone, organization_id: Number(organization_id) }, // Ensure org ID is a number
      include: [{ model: Item, where: { type: item_type }, required: true }],
    });

    if (!pricingRules) {
      throw new PricingNotFoundError('Pricing rules not found for the given parameters.');
    }

    const base_distance_in_km = parseFloat(pricingRules.base_distance_in_km);
    const km_price = parseFloat(pricingRules.km_price);
    const fix_price = parseFloat(pricingRules.fix_price);
    const distance = parseFloat(total_distance);

    const totalCost = fix_price + Math.max(0, distance - base_distance_in_km) * km_price;

    return { total_price: totalCost.toFixed(2) };
  } catch (error) {
    console.error('Error calculating delivery cost:', error);
    throw error;
  }
};
