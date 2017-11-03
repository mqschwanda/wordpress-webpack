import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './theme';

export const InjectGlobalStyle = () => {
  require('normalize.css/normalize.css');

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

  `;
};

export default class Theme extends React.PureComponent {
  componentWillMount() {
    InjectGlobalStyle();
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        { this.props.children }
      </ThemeProvider>
    );
  }
}
