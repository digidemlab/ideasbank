import React from 'react';
import { replaceComponent } from 'meteor/vulcan:core';

const CustomNewsletter = () => {
return (
  <div>
  </div>
)
}

replaceComponent('Newsletter', CustomNewsletter);
