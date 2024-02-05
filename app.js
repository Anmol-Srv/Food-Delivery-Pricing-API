// import express from 'express';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json' assert { type: 'json' };
// import pricingRoutes from './routes/pricingRoutes.js';
// import sequelize from './models/sequelize.js';
// import './models/associations.js'; // Ensure associations are set

// const app = express();
// const port = process.env.PORT || 3000;

// // Use Express's built-in JSON parser
// app.use(express.json());

// // Swagger setup for API documentation
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// // Use the pricing routes
// app.use('/api', pricingRoutes);

// // Function to start the server
// async function startServer() {
//   try {
//     await sequelize.sync(); // Sync models with the database
//     app.listen(port, () => console.log(`Server running on port ${port}.`));
//   } catch (error) {
//     console.error('Unable to sync database or start server:', error);
//     process.exit(1); // Exit with a failure code
//   }
// }

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection at:', promise, 'reason:', reason);
//   process.exit(1);
// });

// startServer(); // Start the server


const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Adjusted for CommonJS, JSON import directly
const pricingRoutes = require('./routes/pricingRoutes');
// const sequelize = require('./models/sequelize');
require('./models/associations'); // Ensure associations are set

const app = express();


// Use Express's built-in JSON parser
app.use(express.json());

// Swagger setup for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use the pricing routes
app.use('/api', pricingRoutes);

// Function to start the server
// Start the server
module.exports = app;