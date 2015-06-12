'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedItemSchema = new Schema({
  created_at: {type: Date, required: true, default: Date.now, index: true},
  gab: {type: Schema.Types.ObjectId, ref: 'Gab', index: true},
  provider: {default: '', type: String, index: true},
  socialId: {type: String, index: true},
  fbUpdate: {},
  tweet: {},
  itemDepth: Number,
  socialScore: Number,
  inReplyTo: String,
  user: {
    socialId: {type: String, index: true},
    profileImageURL: String,
    name: String
  },
  text: {type: String, default: '', index: true}
}, {
  strict: false
});

module.exports = FeedItemSchema;
