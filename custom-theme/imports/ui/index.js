/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
* */

import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { initDevPlugins } from 'modules';
import { Redux, Router } from 'providers';

const ReactRoot = () => (
  <Redux>
    <Router />
  </Redux>
);

render(<ReactRoot />, document.getElementById('react-root'));

initDevPlugins();
