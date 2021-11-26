import React from 'react';
import { mount } from 'enzyme';
import CryptoInfo from '../CryptoInfo';

describe('<CryptoInfo/>', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      title: 'title',
      currency: 'curr',
      sell: 100,
      buy: 110,
      change: 10,
    };
  });

  it('should render', () => {
    const wrapper = mount(<CryptoInfo {...defaultProps} />);
    expect(wrapper).toBeDefined();
  });

  it('should render inc img when change >= 0', () => {
    defaultProps.change = 0;
    const wrapper = mount(<CryptoInfo {...defaultProps} />);
    expect(wrapper.exists('.inc')).toBe(true);
    defaultProps.change = 12;
    expect(wrapper.exists('.inc')).toBe(true);
    expect(wrapper.exists('.dec')).toBe(false);
  });

  it('should render dec img when change < 0', () => {
    defaultProps.change = -20;
    const wrapper = mount(<CryptoInfo {...defaultProps} />);
    expect(wrapper.exists('.dec')).toBe(true);
  });
});
