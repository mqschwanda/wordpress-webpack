import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import { push } from 'react-router-redux';
import store from 'reducers';

export const pushPath = (path) => { store.dispatch(push(path)); };

@connect(({ router }) => ({ router }))
export class ConnectedChildren extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element,
    router: PropTypes.object,
  }
  render() {
    const { children, router } = this.props;

    return children && React.cloneElement(children, router);
  }
}
