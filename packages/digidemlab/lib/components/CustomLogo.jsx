/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way.
*/

import React from 'react';
import { IndexLink } from 'react-router';
import { replaceComponent } from 'meteor/vulcan:core';

const CustomLogo = ({logoUrl, siteTitle}) => {
  return (
    <h1 className="logo-image ">
      <IndexLink to={{pathname: "/"}}>
        <img src={logoUrl} alt={siteTitle} />
      </IndexLink>
    </h1>
  )
}

replaceComponent('Logo', CustomLogo);
