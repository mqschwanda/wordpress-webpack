import React from 'react';
import store from 'reducers';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import { NavList, NavListItem, NavLink } from 'components';

const getPage = (props) => {
  const { pages } = store.getState().wordpress;
  const { slug } = props.match.params;

  for (let i = 0; i < pages.length; i += 1) {
    if (pages[i].slug === slug) return pages[i];
    else if (i === pages.length - 1) pushPath('/not-found');
  }
};

@connect(({ wordpress }) => ({ wordpress }))
export default class Menu extends React.PureComponent {
  render() {
    return (
      <NavList {...this.props}>
        {this.props.wordpress.pages.length > 0 ? this.props.wordpress.pages.map(page => (
          <NavListItem key={page.id}>
            <NavLink pathTo={`/${page.slug}`}>{page.title && page.title.rendered}</NavLink>
          </NavListItem>
        )) : ''}
        {/* <NavListItem>
          <NavLink pathTo="/home">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink pathTo="/page">Page</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink pathTo="/posts">Posts</NavLink>
        </NavListItem> */}
      </NavList>
    );
  }
}
