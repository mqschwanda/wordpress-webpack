import React, { PureComponent } from 'react';
import { Footer as FooterWrap, Container } from 'components';

export default class Footer extends PureComponent {
  render() {
    return (
      <FooterWrap>
        <Container>
          <a href="https://github.com/mqschwanda" style={{ position: 'absolute', bottom: 0 }}>
            GitHub
          </a>
        </Container>
      </FooterWrap>
    );
  }
}
