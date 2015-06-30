'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedItemPageSchema = new Schema({
  provider: {default: '', type: String, index: true},
  socialId: {type: String, index: true},
  pageType: {type: String, default: 'comments'},
  page: String
}, {
  strict: false
});

module.exports = FeedItemPageSchema;
