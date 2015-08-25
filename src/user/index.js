'use strict';

var mongoose = require('mongoose');
var random = require('mongoose-random');
var UserSchema = require('./user.schema.js');

// Attach random plugin. this is used to select random accessTokens.
UserSchema.plugin(random);

module.exports = mongoose.model('User', UserSchema);
