const express = require('express');
const errorsMiddleware = require('../config/errorsMiddleware');
const middleware = require('../config/middleware');
const routes = require('../config/router');
require('dotenv').config();

/**
 * @type {express}
 * @constant {express.Application}
 */
const app = express();

/**
 * @description express.Application Middleware
 */
middleware.init(app);

/**
 * @description express.Application Routes
 */
routes.init(app);

/**
 * @description express.Application Errors Middleware
 */
errorsMiddleware.init(app);

/**
 * @description sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

/**
 * @description runs server at some specified port
 */
const server = app.listen(app.get('port'), () => {
  console.log(`Server is listening at http://localhost:${app.get('port')}`);
});

/**
 * @description simple realization of graceful shutdown
 */
process.on('SIGTERM', () => {
  console.warn('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.warn('HTTP server closed');
  });
});
