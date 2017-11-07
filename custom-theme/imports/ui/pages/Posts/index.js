import React from 'react';
import { Gallery } from 'containers';
// import { pushPath } from 'modules';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

@connect(({ wordpress: { posts } }) => ({ posts }))
export default class PostPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Gallery posts={this.props.posts} />
      </div>
    );
  }
}
