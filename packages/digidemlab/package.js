Package.describe({
  name: "digidemlab"
});

Package.onUse( function(api) {

  api.use([
    'fourseven:scss',

    'nova:core',
    'nova:base-components',
    'nova:posts',
    'nova:users'
  ]);

  api.mainModule('client.js', 'client');

  api.addFiles([
    'lib/modules.js',
    'lib/stylesheets/custom.scss'
  ], ['client']);

});
