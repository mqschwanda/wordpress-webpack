/* eslint-disable no-console */

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { routerMiddleware as router } from './router';

export default applyMiddleware(router, thunk);
