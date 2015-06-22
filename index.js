'use strict';

var Bluebird = require('bluebird');
var mongoose = require('mongoose');
var Star = require('./src/star');
var Gab = require('./src/gab');
var User = require('./src/user');
var FeedItem = require('./src/feeditem');
var FeedItemPage = require('./src/feeditempage');
var PushNotification = require('./src/notification');

// PromisifyAll
Bluebird.promisifyAll(mongoose.Query);
Bluebird.promisifyAll(mongoose.Query.prototype);

Bluebird.promisifyAll(mongoose.Model);
Bluebird.promisifyAll(mongoose.Model.prototype);

module.exports = {
  Star: Star,
  Gab: Gab,
  User: User,
  FeedItem: FeedItem,
  FeedItemPage: FeedItemPage,
  Notification: PushNotification
};
