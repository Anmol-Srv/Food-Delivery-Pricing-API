// import express from 'express';
// import { getPricing } from '../controllers/pricingController.js';

// const router = express.Router();

// router.post('/pricing', getPricing);

// export default router;

const express = require('express');
const { getPricing } = require('../controllers/pricingController');

const router = express.Router();

router.post('/pricing', getPricing);

module.exports = router;
