/*
* @Author: philipp
* @Date:   2016-11-02 16:47:02
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 15:42:48
*/

'use strict';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Blog } from '../backend/blog-server.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './edit-entry.html';

Template.editBlogEntry.onRendered(function() {
	this.subscribe('all-attic-studio-blogs');
	const hooksObject = {
		// Called when any submit operation succeeds
  		onSuccess: function(formType, result) {
  			FlowRouter.go('/admin/blog');
  		}
	}
	
	AutoForm.addHooks(['insertBlogEntry', 'updateBlogEntry'], hooksObject, true);
});

Template.editBlogEntry.helpers({
	getCollection() {
		return Blog;
	},
	getDoc() {
		const id = FlowRouter.current().params._blogId;
		return Blog.findOne({_id: id});
	},
	isInsert() {
		return !FlowRouter.current().params._blogId;
	}
});