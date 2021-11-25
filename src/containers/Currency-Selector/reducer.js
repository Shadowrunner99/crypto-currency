import { createReducer } from '@reduxjs/toolkit';
import { asyncReducerCreator } from '../../global/redux';
import * as actions from './actions';

const initialState = {
    loading: false,
    error: null,
    data: [],
    selectedCrypto: null,
    search: null,
    total: 0,
}

const reducer = createReducer(initialState, {
    ...asyncReducerCreator(
        actions.getCurrencies,
        null,
        (state) => {
            state.loading = true;
            state.error = null;
            state.data = [];
        },
        (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        },
    ),
    ...asyncReducerCreator(
        actions.getTotal,
        null,
        (state) => {
            state.loading = true;
            state.error = null;
            state.data = [];
        },
        (state, action) => {
            state.loading = false;
            state.error = null;
            state.total = action.payload;
        },
    ),
    [actions.searchCurrency]: (state, action) => {
        state.search = action.payload.toLowerCase();
    },
    [actions.selectCurrency]: (state, action) => {
        state.selectedCrypto = action.payload;
    },
})

const cryptosData = (state) => state.currencySelectorReducer.data;
const selectedCrypto = (state) => state.currencySelectorReducer.selectedCrypto;
const search = (state) => state.currencySelectorReducer.search;
const total = (state) => state.currencySelectorReducer.total;

export const selectors = {
    cryptosData,
    selectedCrypto,
    total,
    search,
}

export default reducer;