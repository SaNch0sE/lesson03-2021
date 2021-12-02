const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/users_db';

const connectOptions = {
  // flag to allow users to fall back to the old
  // parser if they find a bug in the new parse
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = mongoose.createConnection(MONGO_URI, connectOptions);
