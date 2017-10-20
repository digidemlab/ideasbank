import React from 'react';
import { IndexLink } from 'react-router';
import { withCurrentUser, getSetting, Components, replaceComponent } from 'meteor/vulcan:core';

const CustomHeader = (props, context) => {

  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "My App");
  const tagline = getSetting("tagline");

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          <IndexLink to={{pathname: "/"}}>
            {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
          </IndexLink>
        </div>

        <div className="nav">

          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>

          <div className="nav-new-post">
            <Components.PostsNewButton/>
          </div>

        </div>

      </header>
    </div>
  )
}

replaceComponent('Header', CustomHeader);
