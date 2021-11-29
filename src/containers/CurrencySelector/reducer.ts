import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { CurrencyResponseItemProps } from '../../global/types';

interface CurrencySelectorReducerState {
  loading: boolean;
  error: string | null;
  data: CurrencyResponseItemProps[];
  selectedCrypto: string | null;
  search: string | null;
  total: number | null;
}

interface StoreProps {
  currencySelectorReducer: CurrencySelectorReducerState;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
  selectedCrypto: null,
  search: null,
  total: 0,
};

const reducer = createReducer(initialState, {
  [actions.getCurrenciesRequest.type]: (state: CurrencySelectorReducerState) => {
    state.loading = true;
    state.error = null;
    state.data = [];
  },
  [actions.getCurrenciesSuccess.type]: (state: CurrencySelectorReducerState, action) => {
    state.loading = false;
    state.error = null;
    state.data = action.payload;
  },
  [actions.getCurrenciesError.type]: (state: CurrencySelectorReducerState, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [actions.getTotalRequest.type]: (state: CurrencySelectorReducerState) => {
    state.loading = true;
    state.error = null;
  },
  [actions.getTotalSuccess.type]: (state: CurrencySelectorReducerState, action) => {
    state.loading = false;
    state.error = null;
    state.total = action.payload;
  },
  [actions.getTotalError.type]: (state: CurrencySelectorReducerState, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [actions.searchCurrency.type]: (state: CurrencySelectorReducerState, action) => {
    state.search = action.payload.toLowerCase();
  },
  [actions.selectCurrency.type]: (state: CurrencySelectorReducerState, action) => {
    state.selectedCrypto = action.payload;
  },
});

const cryptosData = (state: StoreProps) => state.currencySelectorReducer.data;
const selectedCrypto = (state: StoreProps) => state.currencySelectorReducer.selectedCrypto;
const search = (state: StoreProps) => state.currencySelectorReducer.search;
const total = (state: StoreProps) => state.currencySelectorReducer.total;

export const selectors = {
  cryptosData,
  selectedCrypto,
  total,
  search,
};

export default reducer;
