const express = require('express');
const UserRouter = require('../components/user/router');

module.exports = {
  /**
   * @function
   * @param {express.Application} app
   * @summary init Application router
   * @returns void
   */
  init(app) {
    const router = express.Router();

    /**
     * Forwards any requests to the /v1/users URI to UserRouter.
     * @name /v1/users
     * @function
     * @inner
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     */
    router.use('/v1/user', UserRouter);

    /**
     * Forwards any requests to the /v1/users URI to UserRouter.
     * @name /v1/users
     * @function
     * @inner
     * @param {string} path - Express path
     * @param {callback} middleware - Express middleware.
     */
    router.use('/healthcheck', (req, res, next) => {
      res.status(200).json({ status: 'running' });
      next();
    });

    /**
     * @function
     * @inner
     * @param {express.Router}
     */
    app.use(router);
  },
};
