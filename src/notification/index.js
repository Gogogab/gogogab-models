'use strict';

var mongoose = require('mongoose');
var NotificationSchema = require('./notification.schema.js');

module.exports = mongoose.model('Gab', NotificationSchema);
