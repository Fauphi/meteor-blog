/*
* @Author: philipp
* @Date:   2016-11-02 16:54:28
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 15:45:33
*/

'use strict';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blog } from '../backend/blog-server.js';

import './blog.html';

Template.blogView.onCreated(function created() {
	this.subscribe('all-attic-studio-blogs');
});

Template.blogView.helpers({
	blogs() {
		return Blog.find({published: true});
	},
	getDate() {
		return moment(this.createdAt).format('DD.MM.YYYY');
	}
});