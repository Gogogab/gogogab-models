'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fbUpdateSchema = new Schema({
  created_at: {type: Date, required: true, default: Date.now},
  gab: {type: Schema.Types.ObjectId, ref: 'Gab', index: true},
  updateId: {type: String, index: true},
  update: {
    id: String,
    isHero: {type: Boolean, default: false},
    created_time: {type: Date, set: setTime},
    message: String,
    from: {
      name: String,
      id: String
    }
  }
});

module.exports = fbUpdateSchema;

// Implementation ---
function setTime(value) {
  if (_.isString(value)) {
    return new Date(value);
  }
  return value;
}

