/*
* @Author: philipp
* @Date:   2016-11-03 15:39:35
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 15:50:04
*/

'use strict';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blog } from '../backend/blog-server.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './blog-entry.html';

Template.blogEntryView.onRendered(function() {
	this.subscribe('all-attic-studio-blogs');
});

Template.blogEntryView.helpers({
	blogEntry() {
		const id = FlowRouter.current().params._blogId;
		return Blog.findOne({_id: id});
	},
	getDate() {
		return moment(this.createdAt).format('DD.MM.YYYY');
	}
});