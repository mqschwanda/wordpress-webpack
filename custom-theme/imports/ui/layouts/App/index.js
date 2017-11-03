import React from 'react';

import { App as AppWrap } from 'components';
import { Header, Main, Footer } from 'containers';
import { Theme } from 'modules'; // eslint-disable-line no-unused-vars

export default class App extends React.PureComponent {
  render() {
    return (
      <Theme>
        <AppWrap>
          <Header />
          <Main />
          <Footer />
        </AppWrap>
      </Theme>
    );
  }
}
