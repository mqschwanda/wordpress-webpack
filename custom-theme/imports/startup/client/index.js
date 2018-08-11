/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
* */

import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { initDevPlugins } from 'modules';
import { App } from 'layouts';
import Router from './Router';
import Provider from './Provider';

const ReactRoot = () => (
  <Provider>
    <App>
      <Router />
    </App>
  </Provider>
);

render(<ReactRoot />, document.getElementById('react-root'));

initDevPlugins();
