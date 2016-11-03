/*
* @Author: philipp
* @Date:   2016-11-03 11:39:49
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 13:15:16
*/

'use strict';

import { Meteor } from 'meteor/meteor';
import { Blog } from './blog-server.js';

Meteor.publish('all-attic-studio-blogs', () => {
	return Blog.find({});
});