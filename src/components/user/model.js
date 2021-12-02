const { Schema } = require('mongoose');
const connection = require('../../config/connection');

const UserSchema = new Schema({
  email: { type: String },
  name: { type: String },
});

const User = connection.model('UserModel', UserSchema);
module.exports = User;
