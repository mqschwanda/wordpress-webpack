import React from 'react';

import { Main, Container } from 'components';
import { ConnectedChildren, getPages, getCategories, getTags, getPosts } from 'modules';

// export default ({ ...props }) => (
//   <Main>
//     <Container>
//       <ConnectedChildren {...props} />
//     </Container>
//   </Main>
// );


export default class MainWrap extends React.Component {
  componentDidMount() {
    getPages();
    getPosts();
    getTags();
    getCategories();
  }
  render() {
    return (
      <Main>
        <Container>
          <ConnectedChildren {...this.props} />
        </Container>
      </Main>
    );
  }
}
