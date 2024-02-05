const sequelize = require('./models/sequelize');
const app = require('./app');

const port = process.env.PORT || 3000;

async function startServer() {
    try {
      await sequelize.sync(); // Sync models with the database
      app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (error) {
      console.error('Unable to sync database or start server:', error);
      process.exit(1); // Exit with a failure code
    }
  }
  
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
  });
  
  startServer(); 