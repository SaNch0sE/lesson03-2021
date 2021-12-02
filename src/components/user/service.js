const UserModel = require('./model');

/**
 * @exports
 * @method findById
 * @param {string} _id
 * @summary get a user by id
 * @returns {Promise<UserModel>}
 */
function findById(_id) {
  return UserModel.findById(_id).exec();
}

/**
 * @exports
 * @method findByEmail
 * @param {string} email
 * @summary get a user by email field
 * @returns {Promise<UserModel>}
 */
function findByEmail(email) {
  return UserModel.findOne({ email }).exec();
}

/**
 * @exports
 * @method create
 * @param {object} profile
 * @summary create a new user
 * @returns {Promise<UserModel>}
 */
function create(profile) {
  return UserModel.create(profile);
}

/**
 * Find a user by id and update his profile data
 * @exports
 * @method updateById
 * @param {string} _id
 * @param {object} newProfile
 * @summary update a user's profile data
 * @returns {Promise<boolean>}
 */
async function updateById(_id, newProfile) {
  const { modifiedCount } = await UserModel.updateOne({ _id }, newProfile).exec();
  if (modifiedCount !== 0) {
    return true;
  }
  return false;
}

/**
 * @exports
 * @method deleteById
 * @param {string} _id
 * @summary delete a user from database
 * @returns {Promise<void>}
 */
async function deleteById(_id) {
  const { deletedCount } = UserModel.deleteOne({ _id }).exec();
  if (deletedCount !== 0) {
    return true;
  }
  return false;
}

/**
 * @exports
 * @method deleteByEmail
 * @param {string} email
 * @summary delete a user from database by email field
 * @returns {Promise<void>}
 */
function deleteByEmail(email) {
  const { deletedCount } = UserModel.deleteOne({ email }).exec();
  if (deletedCount !== 0) {
    return true;
  }
  return false;
}

module.exports = {
  findById,
  findByEmail,
  create,
  updateById,
  deleteById,
  deleteByEmail,
};
