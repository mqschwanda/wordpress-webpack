/**
  Testing our test component
**/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Footer from './index';

const shallowComponent = (props = {}) => shallow(<Footer {...props} />);

describe('<Footer />', () => {
  it('should render a `<footer>` tag', () => {
    const Component = shallowComponent();
    expect(Component.type()).toEqual('footer');
  });
});
