import React from 'react';
import { mount } from 'enzyme';
import CurrencyItem from '../CurrencyItem';

describe('<CurrencyItem />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      currency: 'btc',
      title: 'BTC',
      handleSelectCurrency: jest.fn(),
      logo: 'test',
      classStatus: 'test-classname',
    };
  });

  it('should be defined', () => {
    expect(<CurrencyItem {...defaultProps} />).toBeDefined();
  });

  it('should render', () => {
    const wrapper = mount(<CurrencyItem {...defaultProps} />);
    expect(wrapper).toBeDefined();
  });

  it('should call handleSelectCurrency on currency click with currency name', () => {
    const wrapper = mount(<CurrencyItem {...defaultProps} />);
    wrapper.children().props().onClick();
    expect(defaultProps.handleSelectCurrency).toHaveBeenCalledWith(defaultProps.currency);
  });
});
