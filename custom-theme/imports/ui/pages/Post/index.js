import React from 'react';
import { Post } from 'containers';
import { pushPath } from 'modules';
import store from 'reducers';

const getPost = (props) => {
  console.log({ props });
  const { posts } = store.getState().wordpress;
  const { slug } = props.match.params;

  for (let i = 0; i < posts.length; i += 1) {
    if (posts[i].slug === slug) {
      return posts[i];
    } else if (i === posts.length - 1) {
      pushPath('/not-found');
    }
  }
};

export default ({ ...props }) => (
  <div>
    <Post {...getPost(props)} />
  </div>
);
