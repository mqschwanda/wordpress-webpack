/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
* */

import React from 'react';
import { render } from 'react-dom';
import { initDevPlugins } from 'modules';

import { ReactRoot } from './ReactRoot';

render(<ReactRoot />, document.getElementById('react-root'));

initDevPlugins();
