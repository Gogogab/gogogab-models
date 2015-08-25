'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  name: String,
  email: {type: String, lowercase: true},
  tel: String,
  hashedPassword: String,
  provider: String,
  facebook: {},
  twitter: {},
  tokens: {
    facebook: {
      refreshToken: String,
      token: String
    },
    twitter: {
      token: String,
      secret: String
    }
  },
  apnIds: [String]
});
