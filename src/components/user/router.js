const { Router } = require('express');
const UserController = require('./controller');

/**
 * Express router to mount user related functions on
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving a user by id
 * @name /v1/user/:id
 * @method get
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:id', UserController.findById);

/**
 * Route serving a user by email
 * @name /v1/user/
 * @method post
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/', UserController.findByEmail);

/**
 * Route serving a new user
 * @name /v1/user
 * @method post
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/', UserController.create);

/**
 * Route that updates user info
 * @name /v1/user/:id
 * @method patch
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.patch('/:id', UserController.updateById);

/**
 * Route that removes user from database by id
 * @name /v1/user/:id
 * @method delete
 * @function
 * @inner
 * @param {string} path -Express path
 * @param {callback} middleware - Express middleware
 */
router.delete('/:id', UserController.deleteById);

/**
 * Route that removes user from database by email
 * @name /v1/user
 * @method delete
 * @function
 * @inner
 * @param {string} path -Express path
 * @param {callback} middleware - Express middleware
 */
router.delete('/', UserController.deleteByEmail);

module.exports = router;
