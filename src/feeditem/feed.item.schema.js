'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedItemSchema = new Schema({
  created_at: {type: Date, required: true, default: Date.now, index: true},
  gab: {type: Schema.Types.ObjectId, ref: 'Gab', index: true},
  provider: {default: '', type: String, index: true},
  socialId: {type: String, index: true},
  fbUpdate: {},
  user: {
    socialId: {type: String, index: true},
    profileImageURL: String
  },
  text: {type: String, default: '', index: true}
}, {
  strict: false
});

module.exports = FeedItemSchema;