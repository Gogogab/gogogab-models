'use strict';

var mongoose = require('mongoose');
var UserSchema = require('./user.schema');

module.exports = mongoose.model('User', UserSchema);
