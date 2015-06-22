'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
  created_at: {type: Date, required: true, default: Date.now},
  gab: {type: Schema.Types.ObjectId, ref: 'Gab', index: true},
  provider: {default: '', type: String},
  token: {type: String, index: true},
  failedAttempts: {type: Number, default: 0}
}, {
  strict: false
});

module.exports = NotificationSchema;
