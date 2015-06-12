'use strict';

var mongoose = require('mongoose');
var FeedItemPageSchema = require('./feed.item.page.schema.js');

module.exports = mongoose.model('FeedItemPage', FeedItemPageSchema);
