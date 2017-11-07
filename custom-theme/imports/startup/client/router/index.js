/**
 We can dispatch navigation actions from anywhere!
 `
   import { push } from 'react-router-redux'; // import
   store.dispatch(push('/foo')); // use
 `
 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Home, NotFound, Page, Posts, Post } from 'pages';
import { history } from 'reducers/router';

const routes = [{
  path: '/',
  exact: true,
  component: () => <Redirect to="/home" />,
}, {
  path: '/home',
  component: Home,
}, {
  path: '/not-found',
  component: NotFound,
}, {
  path: '/posts',
  component: Posts,
  exact: true,
  strict: true,
}, {
  path: '/posts/:slug',
  component: Post,
}, {
  path: '/:slug',
  component: Page,
}];


export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      {routes.map(route => <Route {...route} key={route.path} />)}
    </Switch>
  </ConnectedRouter>
);
