'use strict';

var mongoose = require('mongoose');
var FeedSchema = require('./fb.update.schema.js');

module.exports = mongoose.model('FbUpdate', FeedSchema);
