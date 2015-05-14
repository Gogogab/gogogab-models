'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var GabSchema = require('./gab.schema.js');

GabSchema.methods.isGabContent = function (message) {
  var tagArray = this.tagArray(true);
  var messageTags = message.entities.hashtags.map(function (tag) {
    return tag.text.toLowerCase();
  });
  var intersection = _.intersection(tagArray, messageTags);
  return intersection.length > 0;
};

module.exports = mongoose.model('Gab', GabSchema);
