import React from 'react';
import CurrencySelector from '../CurrencySelector';
import { mount } from 'enzyme';
import * as reactRedux from 'react-redux';
import SearchBox from '../../../components/SearchBox';
import CurrencyItem from '../../../components/CurrencyItem';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockImplementation((selector) => selector()),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe('<CurrencySelector />', () => {
  let defaultProps;
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    defaultProps = {};
  });

  it('should be defined', () => {
    expect(<CurrencySelector />).toBeDefined();
  });

  it('should render', () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
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
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(1);
    const wrapper = mount(<CurrencySelector {...defaultProps} />);
    expect(wrapper).toBeDefined();
  });

  it('should call handleSearch on SearchBox change', () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
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
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(1);
    const wrapper = mount(<CurrencySelector {...defaultProps} />);
    wrapper.find(SearchBox).props().handleChangeSearch('value');
    expect(mockedDispatch).toHaveBeenCalled();
  });

  it('should call handleCurrencySelected on CurrencyItem handleSelectCurrency', () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
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
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(1);
    const wrapper = mount(<CurrencySelector {...defaultProps} />);
    wrapper.find(CurrencyItem).props().handleSelectCurrency('value');
    expect(mockedDispatch).toHaveBeenCalled();
  });

  it('should set active classname to CurrencyItem when currency equal selectedCurrency', () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
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
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce('BTC');
    useSelectorMock.mockReturnValueOnce(1);
    const wrapper = mount(<CurrencySelector {...defaultProps} />);
    expect(wrapper.find(CurrencyItem).props().classStatus).toEqual('active');
  });

  it('should set currency logo to CurrencyItem when when currency equal selectedCurrency', () => {
    const logo = 'test logo';
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    useSelectorMock.mockReturnValueOnce([
      {
        buy_price: 1000,
        currency: 'BTC',
        current_change: 1000,
        logo: logo,
        name: 'Bitcoin',
        sell_price: 1000,
      },
    ]);
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce('BTC');
    useSelectorMock.mockReturnValueOnce(1);
    const wrapper = mount(<CurrencySelector {...defaultProps} />);
    expect(wrapper.find(CurrencyItem).props().logo).toEqual(logo);
  });
});
