'use strict';

var mongoose = require('mongoose');
var UserSchema = require('./user.schema.js');

module.exports = mongoose.model('User', UserSchema);
