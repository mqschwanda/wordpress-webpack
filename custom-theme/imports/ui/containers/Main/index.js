import React from 'react';

import { Main, Container } from 'components';
import { ConnectedChildren } from 'modules';

export default ({ ...props }) => (
  <Main>
    <Container>
      <ConnectedChildren {...props} />
    </Container>
  </Main>
);
