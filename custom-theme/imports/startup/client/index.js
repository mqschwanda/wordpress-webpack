/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
* */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'reducers';
import ReactRouter from './router';
import '../../modules/dev-env.js';

render(
  <Provider store={store}>
    <ReactRouter />
  </Provider>,
  document.getElementById('app'),
);

if (module && module.hot) module.hot.accept();
