import { replaceComponent, getSetting } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const CustomFooter = props => {

  const logoUrl = getSetting("logoUrl");

  return (
    <div className="footer-wrapper clearfix">
      <div className="footer">
        <p><a href='http://digidemlab.org'><img src={logoUrl} width="195" height="49" /></a></p>
        <p className="small">Digidem Lab Ideas Bank is an initiative from <a href='http://digidemlab.org'>Digidem Lab</a></p>
      </div>
    </div>
  )
}

replaceComponent('Footer', CustomFooter);
