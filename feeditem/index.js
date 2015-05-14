'use strict';

var mongoose = require('mongoose');
var FeedItemSchema = require('./feed.item.schema');

module.exports = mongoose.model('FeedItem', FeedItemSchema);
