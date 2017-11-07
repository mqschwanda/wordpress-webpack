import React from 'react';
import { Gallery } from 'containers';
import store from 'reducers';


export default () => (
  <div>
    <Gallery posts={store.getState().wordpress.posts} />
  </div>
);
