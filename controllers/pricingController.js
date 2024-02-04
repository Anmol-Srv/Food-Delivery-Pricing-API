import { calculateDeliveryCost } from '../services/pricingService.js';

  export const getPricing = async (req, res) => {
  try {
    const {
      zone, organization_id, total_distance, item_type,
    } = req.body;
    const result = await calculateDeliveryCost({
      zone, organization_id, total_distance, item_type,
    });
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
