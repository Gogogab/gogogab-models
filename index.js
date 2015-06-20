'use strict';

var Bluebird = require('bluebird');
var mongoose = require('mongoose');
var Star = require('./src/star');
var starSchema = require('./src/star/star.schema');
var Gab = require('./src/gab');
var gabSchema = require('./src/gab/gab.schema');
var User = require('./src/user');
var userSchema = require('./src/user/user.schema');
var FeedItem = require('./src/feeditem');
var feedItemSchema = require('./src/feeditem/feed.item.schema');
var FeedItemPage = require('./src/feeditempage');
var feedItemPageSchema = require('./src/feeditempage/feed.item.page.schema');

// PromisifyAll
Bluebird.promisifyAll(mongoose.Query);
Bluebird.promisifyAll(mongoose.Query.prototype);

Bluebird.promisifyAll(mongoose.Model);
Bluebird.promisifyAll(mongoose.Model.prototype);

module.exports = {
  Star: Star,
  starSchema: starSchema,
  Gab: Gab,
  gabSchema: gabSchema,
  User: User,
  userSchema: userSchema,
  FeedItem: FeedItem,
  feedItemSchema: feedItemSchema,
  FeedItemPage: FeedItemPage,
  feedItemPageSchema: feedItemPageSchema
};
