'use strict';

var mongoose = require('mongoose');
var StarSchema = require('./star.schema');

module.exports = mongoose.model('Star', StarSchema);
