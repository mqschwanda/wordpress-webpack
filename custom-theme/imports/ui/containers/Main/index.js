import React, { PureComponent } from 'react';
import { Main as MainWrap, Container } from 'components';

export default class Main extends PureComponent {
  render() {
    return (
      <MainWrap>
        <Container>
          Main
        </Container>
      </MainWrap>
    );
  }
}
