'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  name: String,
  email: {type: String, lowercase: true},
  hashedPassword: String,
  provider: String,
  facebook: {
    name: String,
    id: String
  },
  tokens: {
    facebook: {
      refreshToken: String,
      token: String
    }
  }
});
