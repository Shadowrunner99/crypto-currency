import React from 'react';
import Loader from '../Loader';
import { mount } from 'enzyme';

describe('<Loader />', () => {
  it('should be defined', () => {
    expect(<Loader />).toBeDefined();
  });

  it('should render', () => {
    const wrapper = mount(<Loader />);
    expect(wrapper).toBeDefined();
  });
});
