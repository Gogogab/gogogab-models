'use strict';

var mongoose = require('mongoose');
var StarSchema = require('./star.schema.js');

module.exports = mongoose.model('Star', StarSchema);
