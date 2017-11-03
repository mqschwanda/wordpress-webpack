import React, { PureComponent } from 'react';
import { Header as HeaderWrap, Container } from 'components';

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderWrap>
        <Container>
          Header
        </Container>
      </HeaderWrap>
    );
  }
}
