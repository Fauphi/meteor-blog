/*
* @Author: philipp
* @Date:   2016-11-03 11:27:12
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 15:45:02
*/

'use strict';

import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import './admin/blog.js';
import './client/blog.js';
import './client/blog-entry.js';
import './layout.js';


// client
FlowRouter.route(['/blog'], {
    action: function(params, queryParams) {
        BlazeLayout.render('Attic_Studio_Blog_Body', {main: 'blogView'});
    }
});

FlowRouter.route(['/blog/:_blogId'], {
    action: function(params, queryParams) {
        BlazeLayout.render('Attic_Studio_Blog_Body', {main: 'blogEntryView'});
    }
});

// admin
FlowRouter.route(['/admin/blog'], {
    action: function(params, queryParams) {
        BlazeLayout.render('Attic_Studio_Blog_Body', {main: 'blog'});
    }
});

FlowRouter.route(['/admin/blog/new'], {
    action: function(params, queryParams) {
        BlazeLayout.render('Attic_Studio_Blog_Body', {main: 'editBlogEntry'});
    }
});

FlowRouter.route(['/admin/blog/edit/:_blogId'], {
    action: function(params, queryParams) {
        BlazeLayout.render('Attic_Studio_Blog_Body', {main: 'editBlogEntry'});
    }
});