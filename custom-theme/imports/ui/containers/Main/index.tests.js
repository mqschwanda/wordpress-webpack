/**
  Testing our test component
**/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Main from './index';

const shallowComponent = (props = {}) => shallow(<Main {...props} />);

describe('<Main />', () => {
  it('should render a `<div>` tag', () => {
    const Component = shallowComponent();
    expect(Component.type()).toEqual('div');
  });
});
