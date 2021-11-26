import { createAction } from '@reduxjs/toolkit';
import { asyncActionCreator } from '../../global/redux';
import * as constants from './constants';

export const getCurrencies = asyncActionCreator(constants.GET_CURRENCIES_DATA);
export const getTotal = asyncActionCreator(constants.GET_TOTAL);
export const selectCurrency = createAction(constants.SELECT_CURRENCY);
export const searchCurrency = createAction(constants.SEARCH_CURRENCY);
