/**
  Render the `<App />` layout inside of the react root created in the client's
  `main.html` file.
* */

import React from 'react';
import { Redux, Router, Theme } from 'providers';

export const ReactRoot = () => (
  <Redux>
    <Theme>
      <Router />
    </Theme>
  </Redux>
);

export default ReactRoot;
