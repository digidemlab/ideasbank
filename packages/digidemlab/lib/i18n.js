/*
  Let's add an international label to the field added in custom_fields.js
*/

import { addStrings } from 'meteor/vulcan:core';

addStrings('en', {
  "app.about": "Digidem Ideas is an initiative from Digidem Lab." // add a new one (collection.field: "Label")
});
