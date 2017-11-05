import React from 'react';

import { Footer, Container, Copyright, FooterNav, Nav, NavWrapper } from 'components';
import { Menu } from 'containers';

const copyright = 'MQSchwanda';

export default () => (
  <Footer>
    <FooterNav>
      <Container>
        <Nav>
          <NavWrapper>
            <Copyright>&copy; { copyright }</Copyright>
            <Menu footer />
          </NavWrapper>
        </Nav>
      </Container>
    </FooterNav>
  </Footer>
);
