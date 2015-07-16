'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedItemSchema = new Schema({
  created_at: {type: Date, required: true, default: Date.now, index: true},
  gab: {type: Schema.Types.ObjectId, ref: 'Gab', index: true},
  provider: {default: '', type: String, index: true},
  socialId: {type: String, index: true},
  update: {},
  isHero: Boolean,
  feedDepth: Number,
  inReplyTo: {type: String, index: true},
  user: {
    socialId: {type: String, index: true},
    socialHandle: String,
    profileImageURL: String,
    name: String
  },
  text: {type: String, default: '', index: true}
}, {
  strict: false
});

module.exports = FeedItemSchema;
