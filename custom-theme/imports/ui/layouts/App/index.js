import React from 'react';
import { App } from 'components';
import { Header, Main, Footer } from 'containers';
import { Theme, ConnectedChildren } from 'modules';

export default ({ ...props }) => (
  <Theme>
    <App>
      <Header />
      <Main>
        <ConnectedChildren {...props} />
      </Main>
      <Footer />
    </App>
  </Theme>
);
