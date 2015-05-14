'use strict';

var mongoose = require('mongoose');
var FeedSchema = require('./fb.update.schema');

module.exports = mongoose.model('FbUpdate', FeedSchema);
