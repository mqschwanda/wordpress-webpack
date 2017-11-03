/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
* */

import React from 'react';
import Router from '../Router';
import Provider from '../Provider';

export default () => (
  <Provider>
    <Router />
  </Provider>
);
