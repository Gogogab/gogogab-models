'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  created_at: {type: Date, required: true, default: Date.now, index: true},
  duration: {type: Number, default: 1},
  facebookPage: Object,
  hashTags: [{text: {type: String}}],
  headerImg: {
    name: {type: String, default: ''},
    url: {type: String, default: ''},
    mimetype: String,
    extension: String,
    size: Number
  },
  kueJobs: {type: Object, default: {}},
  liveStreamURL: String,
  live: {type: Boolean, default: false},
  network: String,
  scheduledStart: Date,
  show: String,
  showDescription: String,
  showWebsite: String,
  star: {type: Schema.Types.ObjectId, ref: 'Star'},
  published: {type: Boolean, default: false}
});
