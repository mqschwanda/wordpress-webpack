/**
  Render the `<Provider />` layout inside of the react root created in the client's
  `main.html` file.
* */

import React from 'react';
import { Provider } from 'react-redux';
import store from 'reducers';

export default ({ ...props }) => <Provider store={store} {...props} />;
