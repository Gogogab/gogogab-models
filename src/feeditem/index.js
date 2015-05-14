'use strict';

var mongoose = require('mongoose');
var FeedItemSchema = require('./feed.item.schema.js');

module.exports = mongoose.model('FeedItem', FeedItemSchema);
