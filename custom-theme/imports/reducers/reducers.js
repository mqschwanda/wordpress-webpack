import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { wordpressReducer as wordpress } from './wordpress';

export default combineReducers({ router, wordpress });
