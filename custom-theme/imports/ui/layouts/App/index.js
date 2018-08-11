import React from 'react';
import { App } from 'components';
import { Header, Main, Footer } from 'containers';
import { ConnectedChildren } from 'modules';

export default ({ ...props }) => (
  <App>
    <Header />
    <Main>
      <ConnectedChildren {...props} />
    </Main>
    <Footer />
  </App>
);
