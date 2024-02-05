const { calculateDeliveryCost } = require('../services/pricingService');

const getPricing = async (req, res) => {
  try {
    const {
      zone,
      organization_id, // assuming that 'organization_id' in req.body can be camelCased
      total_distance, // assuming that 'total_distance' in req.body can be camelCased
      item_type, // assuming that 'item_type' in req.body can be camelCased
    } = req.body;


    if (!zone || !organization_id || total_distance === undefined || !item_type) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Assuming total_distance should be a number and greater than 0
    if (isNaN(total_distance) || total_distance <= 0) {
      return res.status(400).json({ message: "Invalid total_distance value" });
    }
    // Example validation for item_type
    if (!['perishable', 'non-perishable'].includes(item_type)) {
      return res.status(400).json({ message: "Unsupported item type" });
    }


    const result = await calculateDeliveryCost({
      zone,
      organization_id,
      total_distance,
      item_type,
    });

    if (!result) {
      return res.status(404).json({ message: "Pricing information not found for the provided parameters." });
    }

    res.json(result);
  } catch (error) {
    console.log(error);
    // res.status(500).send(error.message);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};

module.exports = { getPricing };
