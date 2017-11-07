import React from 'react';
import { NavList, NavListItem, NavLink } from 'components';

export default ({ ...props }) => (
  <NavList {...props}>
    <NavListItem>
      <NavLink pathTo="/home">Home</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink pathTo="/page">Page</NavLink>
    </NavListItem>
    <NavListItem>
      <NavLink pathTo="/posts">Posts</NavLink>
    </NavListItem>
  </NavList>
);
