/**
 * @exports checkId,create,updateById
 */

const Joi = require('joi');
const { Types } = require('mongoose');

/**
 * @function
 * @param {String} profile.id - objectId
 * @returns Boolean
 * @memberof UserValidation
 */
const checkId = (profile) => {
  const joiValid = Joi
    .object({
      id: Joi.string().min(12).max(24),
    })
    .unknown(true)
    .validate(profile);
  if (joiValid) {
    const valid = Types.ObjectId.isValid(profile.id);
    if (!valid) {
      throw Joi.ValidationError('Invalid id');
    }
    return valid;
  }
  return joiValid;
};

/**
 * @function
 * @param {String} profile.email
 * @param {String} profile.name
 * @returns Boolean
 * @memberof UserValidation
 */
const checkEmail = (profile) => Joi
  .object({
    email: Joi.string().email().required(),
  })
  .unknown(true)
  .validate(profile);

/**
 * @function
 * @param {String} profile.email
 * @param {String} profile.name
 * @returns Boolean
 * @memberof UserValidation
 */
const create = (profile) => Joi
  .object({
    email: Joi.string().email().required(),
    name: Joi
      .string()
      .pattern(/^[a-zA-Z]+\s+[a-zA-Z]+$/)
      .min(1)
      .max(50)
      .required(),
  })
  .unknown(true)
  .validate(profile);

/**
 * @function
 * @param {String} profile.id - objectId
 * @param {String} profile.name
 * @returns Boolean
 * @memberof UserValidation
 */
const updateById = (profile) => {
  const joiValid = Joi
    .object({
      id: Joi.string().min(12).max(24),
      fullName: Joi
        .string()
        .pattern(/^[a-zA-Z]+\s+[a-zA-Z]+$/)
        .min(1)
        .max(30)
        .required(),
    })
    .unknown(true)
    .validate(profile);
  if (joiValid) {
    const valid = Types.ObjectId.isValid(profile.id);
    if (!valid) {
      throw Joi.ValidationError('Invalid id');
    }
    return valid;
  }
  return joiValid;
};

module.exports = {
  checkId,
  checkEmail,
  create,
  updateById,
};
