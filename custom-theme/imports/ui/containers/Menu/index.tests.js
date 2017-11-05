/**
  Testing our test component
**/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from './index';

const shallowComponent = (props = {}) => shallow(<Header {...props} />);

describe('<Header />', () => {
  it('should render a `<div>` tag', () => {
    const Component = shallowComponent();
    expect(Component.type()).toEqual('div');
  });
});
