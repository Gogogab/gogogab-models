'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
  created_at: {type: Date, required: true, default: Date.now, index: true},
  gab: {type: Schema.Types.ObjectId, ref: 'Gab', index: true},
  provider: {default: '', type: String, index: true},
  token: String
}, {
  strict: false
});

module.exports = NotificationSchema;
