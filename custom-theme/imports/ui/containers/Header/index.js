import React from 'react';
import { Header, Container, Brand, Nav, NavWrapper, CollapsibleButton } from 'components';
import { Menu } from 'containers';

export default () => (
  <Header>
    <Container>
      <Nav>
        <NavWrapper>
          <Brand pathTo="/home">Wordpress</Brand>
          {/* <CollapsibleButton href="#" className="button-collapse">
            <FaBars />
          </CollapsibleButton> */}
          <Menu />
        </NavWrapper>
      </Nav>
    </Container>
  </Header>
);
