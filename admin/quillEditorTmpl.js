/*
* @Author: philipp
* @Date:   2016-11-03 13:24:32
* @Last Modified by:   philipp
* @Last Modified time: 2016-11-03 14:39:48
*/

'use strict';

import { Template } from 'meteor/templating';

const Quill = require('quill');

import './quillEditorTmpl.html';

Template.quillEditor.onRendered(function rendered() {
	const options = {
		modules: {
			toolbar: [
				[{ header: [1, 2, false] }],
				['bold', 'italic', 'underline'],
				['image', 'code-block']
			]
		},
		placeholder: 'Compose an epic...',
		theme: 'snow'
    }
	,	editor = new Quill('.editor', options);

	$('.editor .ql-editor').html(this.data.value);
});