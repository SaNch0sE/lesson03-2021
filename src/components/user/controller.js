const UserService = require('./service');
const UserValidation = require('./validation');

/**
 * @function findById
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
const findById = async (req, res, next) => {
  UserValidation.checkId(req.params);

  const users = await UserService.findById(req.params.id);

  res.status(200).json(users);
  next();
};

/**
 * @function findByEmail
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
const findByEmail = async (req, res, next) => {
  UserValidation.checkEmail(req.body);

  const users = await UserService.findByEmail(req.body.email);

  res.status(200).json(users);
  next();
};

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
const create = async (req, res, next) => {
  UserValidation.create(req.body);

  const user = await UserService.create(req.body);

  res.status(200).json(user);
  next();
};

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
const updateById = async (req, res, next) => {
  const profile = req.body;
  profile.id = req.params.id;
  UserValidation.updateById(profile);

  const modified = await UserService.updateById(req.params.id, req.body);

  res.status(200).json({ modified });
  next();
};

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
const deleteById = async (req, res, next) => {
  UserValidation.checkId(req.params);

  const deleted = await UserService.deleteByEmail(req.params.id);

  res.status(200).json({ deleted });
  next();
};

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
const deleteByEmail = async (req, res, next) => {
  UserValidation.checkEmail(req.body);

  const deleted = await UserService.deleteByEmail(req.body.email);

  res.status(200).json({ deleted });
  next();
};

module.exports = {
  findById,
  findByEmail,
  create,
  updateById,
  deleteById,
  deleteByEmail,
};
