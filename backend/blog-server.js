/*
* @Author: philipp
* @Date:   2016-11-02 16:47:08
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 16:58:32
*/

'use strict';

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { AutoForm } from 'meteor/aldeed:autoform';

export const Blog = new Mongo.Collection('attic-studio-blog');

if(Meteor.isServer) {
	import './publications-server.js';

    Meteor.methods({
    	'blog.create'(data) {
    		Blog.insert(data);
    	},
    	'blog.update'(update, id) {
    		Blog.update(id, update);
    	},
    	'blog.delete'(id) {
    		Blog.remove(id);
    	}
    });

}

Blog.attachSchema(new SimpleSchema({
	title: {
        type: String,
        label: "Title",
        max: 200
    },
    createdAt: {
        type: Number,
        label: "Created",
        autoValue: function() {
            if(this.isInsert || this.isUpdate) return new Date().getTime();
            else this.unset();
        },
        autoform: {
            omit: true
        }
    },
    published: {
        type: Boolean,
        optional: true,
        label: "Published",
        autoform: {
            afFieldInput: {
                type: "boolean-checkbox"
            }
        }
    },
    author: {
        type: String,
        optional: true,
        label: "Author"
    },  
    titlePhoto: {
        type: String,
        label: "Title photo",
        autoform: {
            afFieldInput: {
                type: 'fileupload'
            }
        }
    }, 
    preview: {
        type: String,
        optional: true,
        label: 'Preview',
        autoform: {
            rows: 3
        }
    },
    content: {
        type: String,
        label: "Content",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'quilleditor'
            }
        }
    }
}));