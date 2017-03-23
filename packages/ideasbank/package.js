Package.describe({
  name: "ideasbank"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'fourseven:scss',
    'nova:core',
  ]);

  api.addFiles([
    'lib/stylesheets/main.scss'
  ], ['client']);

});
