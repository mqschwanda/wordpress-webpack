import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
// import { createHashHistory } from 'history';
export const history = createBrowserHistory(); // Create a history of your choosing (we're using a browser history in this case)
// export const history = createHashHistory(); // Create a history of your choosing (we're using a browser history in this case)

export default routerMiddleware(history); // Build the middleware for intercepting and dispatching navigation actions;
