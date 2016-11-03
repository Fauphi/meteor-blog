/*
* @Author: philipp
* @Date:   2016-11-02 16:54:28
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 15:36:29
*/

'use strict';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blog } from '../backend/blog-server.js';

import './blog.html';

Template.blog.onCreated(function created() {
	this.subscribe('all-attic-studio-blogs');
});

Template.blog.helpers({
	blogs() {
		return Blog.find({});
	},
	getDate() {
		return moment(this.createdAt).format('DD.MM.YYYY');
	}
});

Template.blog.events({
	'click [data-action="delete-blog-entry"]'() {
		Meteor.call('blog.delete', this._id);
	}
});
