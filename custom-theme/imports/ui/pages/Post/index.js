import React from 'react';
import { Post } from 'containers';
import { App } from 'layouts';
import { pushPath } from 'modules';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

@connect(({ wordpress: { posts }, location }) => ({ posts, location }))
export default class PostPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { post: {} };
    this.getPost = this.getPost.bind(this);
  }
  componentDidMount() {
    this.getPost();
  }
  componentDidUpdate() {
    this.getPost();
  }
  getPost() {
    const { posts } = this.props;
    const { slug } = this.props.match.params;

    for (let i = 0; i < posts.length; i += 1) {
      if (posts[i].slug === slug) {
        this.setState({ post: posts[i] });
        i = posts.length;
      } else if (i === posts.length - 1) pushPath('/not-found');
    }
  }
  render() {
    return (
      <App>
        <Post {...this.state.post} />
      </App>
    );
  }
}
