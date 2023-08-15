import { AppDataSource } from './db/data-source.js';
import app from './server.js';
import config from './config/config.js'

const PORT = config.port || 3000;

AppDataSource.initialize()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`API Server listening on port ${PORT}`);
      });
    })
    .catch((error) => console.log(error))