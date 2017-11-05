/**
  The `<Link/>` component...
* */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pushPath } from 'modules'; // eslint-disable-line no-unused-vars

const A = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  cursor: pointer;
  &:hover
  {
    opacity: 0.85;
    filter: brightness(115%);
  }
`;

const Span = styled.span`
  color: inherit;
  text-decoration: none;
`;


export default class Link extends PureComponent {
  static propTypes = {
    pathTo: PropTypes.string,
    label: PropTypes.string,
  }
  render() {
    return (
      <A onClick={() => { pushPath(this.props.pathTo); }}>
        { this.props.label ? (
          <Span>{this.props.label}</Span>
        ) : this.props.children }
      </A>
    );
  }
}
