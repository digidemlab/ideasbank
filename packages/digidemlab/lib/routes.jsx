/*
A new custom route for our custom page.
Browse to http://localhost:3000/my-custom-route to see it.
*/

import { addRoute, getComponent } from 'meteor/vulcan:core';

addRoute({name: "myCustomRoute", path: "/about", component: getComponent("MyCustomPage")});
