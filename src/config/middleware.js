const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

module.exports = {
  /**
   * @function
   * @description express middleware
   * @param {express.Application} app
   * @returns void
   */
  init(app) {
    /**
     * @description enables req.query with parsed url queries
     */
    app.use(
      express.urlencoded({ extended: true }),
    );
    /**
     * @description enables req.body with json data
     */
    app.use(express.json());
    /**
     * @description helps you secure your Express apps by setting various HTTP headers
     */
    app.use(helmet());
    /**
     * @description providing a Connect/Express middleware that
     * can be used to enable CORS with various options
     */
    app.use(cors());
  },
};
