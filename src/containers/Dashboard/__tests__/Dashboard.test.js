import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../Dashboard';
import * as reactRedux from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementation((selector) => selector()),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe('<Dashboard />', () => {
  let defaultProps;
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  beforeEach(() => {
    defaultProps = {};
  });

  it('should be defined', () => {
    expect(<Dashboard />).toBeDefined();
  });

  it('should render', () => {
    useSelectorMock.mockReturnValueOnce([
      {
        buy_price: 1000,
        currency: 'BTC',
        current_change: 1000,
        logo: 'test',
        name: 'Bitcoin',
        sell_price: 1000,
      },
    ]);
    useSelectorMock.mockReturnValueOnce('BTC');
    const wrapper = mount(<Dashboard {...defaultProps} />);
    expect(wrapper).toBeDefined();
  });
});
