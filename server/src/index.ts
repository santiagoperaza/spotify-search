import { AppDataSource } from './db/data-source.js';
import app from './server.js';
import config from './config/config.js'

const PORT = config.port || 3000;

// Global error handling
process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });

AppDataSource.initialize()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`API Server listening on port ${PORT}`);
      })
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err)
  })