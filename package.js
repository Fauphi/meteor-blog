Package.describe({
  name: 'attic-studio:quill-blog',
  // git: 'https://github.com/fauphi',
  summary: 'Simple blog with quill-editor.',
  version: '0.1.0'
});

Package.onUse(function (api) {
  // Npm.depends({});
  
  api.versionsFrom('1.4.1');

  api.use([
    'ecmascript',
    'es5-shim',
    'mongo',
    'templating',
    'reactive-var',
    'momentjs:moment',
    'kadira:flow-router',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'aldeed:autoform',
    'blaze-html-templates',
    'kadira:blaze-layout'
  ], ['client', 'server']);

  api.addFiles([  
    'admin/blog.html',
    'admin/blog.css',
    'admin/blog.js',
    'admin/edit-entry.html',
    'admin/edit-entry.css',
    'admin/edit-entry.js',
    'admin/fileUploadTmpl.js',
    'admin/fileUploadTmpl.html',
    'admin/quillEditorTmpl.js',
    'admin/quillEditorTmpl.html'
  ], 'client');

  api.addFiles([
    'layout.js',
    'layout.html',
    'routes.js'
  ], 'client');

  api.addFiles([  
    'client/blog.html',
    'client/blog.js',
    'client/blog-entry.html',
    'client/blog-entry.js'
  ], 'client');

  api.addFiles([
    'backend/blog-server.js',
    'backend/publications-server.js',
  ], ['server']);

  api.addFiles([
    'quill/quill.snow.css'
  ], 'client');

  // api.export('BlogView');
});

Npm.depends({
  quill: '1.1.3'
});