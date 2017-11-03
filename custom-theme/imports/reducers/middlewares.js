/* eslint-disable no-console */

import { applyMiddleware } from 'redux';
import { routerMiddleware } from './router';

export default applyMiddleware(routerMiddleware);
