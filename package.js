Package.describe({
  name: 'fauphi:meteor-blog',
  git: 'https://github.com/Fauphi/meteor-blog',
  summary: 'Simple blog with quill-editor.',
  version: '0.1.1'
});

Package.onUse(function (api) {
  // Npm.depends({});
  
  api.versionsFrom('1.3.2.4');

  api.use([
    'ecmascript',
    'es5-shim',
    'mongo',
    'templating',
    'reactive-var',
    'momentjs:moment@2.15.2',
    'kadira:flow-router@2.12.1',
    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.10.0',
    'aldeed:autoform@5.8.1',
    'blaze-html-templates',
    'kadira:blaze-layout@2.3.0',
    'fauphi:autoform-base64-img',
    'fauphi:autoform-quill'
  ], ['client', 'server']);

  api.addFiles([  
    'admin/blog.html',
    'admin/blog.css',
    'admin/blog.js',
    'admin/edit-entry.html',
    'admin/edit-entry.css',
    'admin/edit-entry.js'
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
  
});