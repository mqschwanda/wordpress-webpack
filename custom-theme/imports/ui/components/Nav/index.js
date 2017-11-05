/**
  The `<Nav/>` component...
* */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { Link } from 'components';

export const CollapsibleButton = styled.a`
  float: right;
  position: relative;
  z-index: 1;
  height: ${({ theme }) => theme.headerHeightMobile};
  margin: 0 18px;
  color: white;
  font-size: 30px;
  & * {
    color: white;
  }
  & .button-collapse i {
    height: ${({ theme }) => theme.headerHeightMobile};
    line-height: ${({ theme }) => theme.headerHeightMobile};
  }

  @media only screen and (min-width: 993px) {
      display: none;
  }
  @media only screen and (min-width: 601px) {
      height: ${({ theme }) => theme.headerHeight};
      line-height: ${({ theme }) => theme.headerLineHeight};
  }
  ${'' /* position: relative;
  box-sizing: border-box;
  margin: ${props => props.theme.componentMargin};
  background-color: ${props => props.theme.componentBgColor};
  border-radius: ${props => props.theme.componentBorderRadius};
  transition: ${props => props.theme.componentTransition};
  box-shadow: ${props => props.theme.componentShadow}; */}
`;

export const Nav = styled.nav`
  ${'' /* position: relative;
  box-sizing: border-box;
  margin: ${props => props.theme.componentMargin};
  background-color: ${props => props.theme.componentBgColor};
  border-radius: ${props => props.theme.componentBorderRadius};
  transition: ${props => props.theme.componentTransition};
  box-shadow: ${props => props.theme.componentShadow}; */}
`;

export const NavWrapper = styled.div`
  position: relative;
  height: 100%;
  @media ${props => props.theme.smallAndDown}
  {

    ${'' /* nav.nav-extended .nav-wrapper {
      min-height: 64px;
    } */}
    ${'' /* nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
      height: 64px;
      line-height: 64px;
    } */}
    ${'' /* .navbar-fixed {
      height: 64px;
    } */}
  }
`;

export const NavList = styled.ul`
  margin: 0;
  float: right !important;
  padding-left: 0;
  list-style-type: none;
  font-size: 18px;
  height: ${({ theme, footer }) => (footer ? '40px' : theme.headerHeight)};
  line-height: ${({ theme, footer }) => (footer ? '40px' : theme.headerHeight)};
  ${'' /*
  padding: ${props => `${(parseInt(props.theme.headerHeight.replace(/px/, '')) - parseInt('18px'.replace(/px/, ''))) / 4}px`} 0;
*/}
  @media ${({ theme }) => theme.smallAndDown}
  {
    height: ${({ theme, footer }) => (footer ? '40px' : theme.headerHeightMobile)};
    line-height: ${({ theme, footer }) => (footer ? '40px' : theme.headerHeightMobile)};
    ${'' /*
    padding: ${props => `${(parseInt(props.theme.headerHeightMobile.replace(/px/, '')) - parseInt('16px'.replace(/px/, ''))) / 4}px`} 0;
  */}
    font-size: 16px;
    box-sizing: border-box;
  }

  ${({ footer }) => (footer ? `
    display: inline-block;
    padding: 0;
  ` : '')}
`;

export const NavListItem = styled.li`
  list-style-type: none;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
  float: left;
  padding: 0;
`;

const NavLinkText = styled.span`
  display: block;
  font-size: inherit;
  font-weight: bold;
  padding: 0 15px;
  cursor: pointer;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  transition: background-color .3s;
  color: ${({ theme }) => theme.headerColor};


  ${({ isActive, theme }) => (isActive ? `background-color: ${theme.navLinkBgHover};` : '')}
  &:hover
  {
    background-color: ${({ theme }) => theme.navLinkBgHover};
    outline: 0;
  }
`;

@connect(({ router }) => ({ router }))
export class NavLink extends PureComponent {
  static propTypes = { pathTo: PropTypes.string, router: PropTypes.object }
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleIsActive = this.handleIsActive.bind(this);
  }
  componentDidMount() { this.setState({ isActive: this.handleIsActive() }); }
  componentDidUpdate() { this.setState({ isActive: this.handleIsActive() }); }
  handleIsActive() {
    const { router, pathTo } = this.props;
    return router.location && (pathTo === router.location.pathname);
  }
  render() {
    return (
      <Link pathTo={this.props.pathTo}>
        <NavLinkText {...this.props} isActive={this.state.isActive} />
      </Link>
    );
  }
}

export const Brand = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.headerColor};
  font-size: ${({ theme }) => theme.brandFontSize};
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  padding: 0;
  &:active,
  &:hover
  {
    outline: 0;
  }
  `;

export const BrandLink = ({ ...props }) => (
  <Link pathTo={props.pathTo}>
    <Brand {...props} />
  </Link>
);
