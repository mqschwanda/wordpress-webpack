import 'normalize.css';
import React, { PureComponent } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { theme } from 'modules';

export class Theme extends PureComponent {
  componentWillMount() {
    this.injectGlobalStyle();
  }

  injectGlobalStyle = () => { /* eslint-disable no-unused-expressions */
    injectGlobal`
      #app
      {
        width: 100%;
        height: 100%;
        width: 100vw;
        height: 100vh;
      }

      *
      {
        font-family: Roboto;
      }

      img
      {
        max-width: 100%;
      }

    `;
  } /* eslint-enable no-unused-expressions */
  render() {
    return <ThemeProvider theme={theme.default} {...this.props} />;
  }
}

export default Theme;
