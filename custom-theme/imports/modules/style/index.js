import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './theme';

export default class Theme extends React.PureComponent {
  componentWillMount() {
    this.injectGlobalStyle();
  }

  injectGlobalStyle = () => {
    // require('normalize.css/normalize.css');

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
  }
  render() {
    return <ThemeProvider theme={theme} {...this.props} />;
  }
}
