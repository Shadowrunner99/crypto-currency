import { createAction } from '@reduxjs/toolkit';
import * as constants from './constants';
import { CurrencyResponseItemProps } from '../../global/types';

export const getCurrenciesRequest = createAction(constants.GET_CURRENCIES_DATA_REQUEST);
export const getCurrenciesSuccess = createAction<CurrencyResponseItemProps[]>(
  constants.GET_CURRENCIES_DATA_SUCCESS,
);
export const getCurrenciesError = createAction<string>(constants.GET_CURRENCIES_DATA_ERROR);
export const getTotalRequest = createAction(constants.GET_TOTAL_REQUEST);
export const getTotalSuccess = createAction<number>(constants.GET_TOTAL_SUCCESS);
export const getTotalError = createAction<string>(constants.GET_TOTAL_ERROR);
export const selectCurrency = createAction<string>(constants.SELECT_CURRENCY);
export const searchCurrency = createAction<string>(constants.SEARCH_CURRENCY);
