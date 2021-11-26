import reducer, { selectors } from '../reducer';
import * as actions from '../actions';

describe('Currency Selector reducer', () => {
  let initialState, action, store;

  beforeEach(() => {
    store = {
      currencySelectorReducer: {
        loading: false,
        error: null,
        data: [],
        selectedCrypto: null,
        search: null,
        total: 0,
      },
    };
    initialState = {
      loading: false,
      error: null,
      data: [],
      selectedCrypto: null,
      search: null,
      total: 0,
    };
  });

  it('selectors should work correctly', () => {
    expect(selectors.cryptosData(store)).toStrictEqual([]);
    expect(selectors.selectedCrypto(store)).toStrictEqual(null);
    expect(selectors.search(store)).toStrictEqual(null);
    expect(selectors.total(store)).toStrictEqual(0);
  });

  it('should handle getCurrencies request', () => {
    action = { type: actions.getCurrencies.REQUEST, payload: [] };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      data: [],
    });
  });

  it('should handle getCurrencies success', () => {
    action = { type: actions.getCurrencies.SUCCESS, payload: [] };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      data: [],
    });
  });

  it('should handle getTotal request', () => {
    action = { type: actions.getTotal.REQUEST, payload: [] };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      data: [],
    });
  });

  it('should handle getTotal success', () => {
    action = { type: actions.getTotal.SUCCESS, payload: [] };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      total: [],
    });
  });

  it('should handle searchCurrency', () => {
    action = { type: actions.searchCurrency, payload: 'Value' };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      search: 'value',
    });
  });

  it('should handle selectCurrency', () => {
    action = { type: actions.selectCurrency, payload: 'value' };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedCrypto: 'value',
    });
  });
});
