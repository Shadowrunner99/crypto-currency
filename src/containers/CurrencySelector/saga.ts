import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import CryptoService from '../../global/service';
import { CurrencyResponseItemProps } from '../../global/types';

export function* getCurrenciesSaga() {
  try {
    const response: CurrencyResponseItemProps[] = yield call(CryptoService.getCurrencies);
    yield put(actions.getCurrenciesSuccess(response));
  } catch (err: any) {
    yield put(actions.getCurrenciesError(err.message));
  }
}

export function* getTotalSaga() {
  try {
    const response: number = yield call(CryptoService.getTotal);
    yield put(actions.getTotalSuccess(response));
  } catch (err: any) {
    yield put(actions.getTotalError(err.message));
  }
}

export function* currencySelectorSagaWatcher() {
  yield all([
    takeLatest(actions.getCurrenciesRequest, getCurrenciesSaga),
    takeLatest(actions.getTotalRequest, getTotalSaga),
  ]);
}
