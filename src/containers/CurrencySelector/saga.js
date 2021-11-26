import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import CryptoService from '../../global/service';

export function* getCurrenciesSaga() {
  try {
    const response = yield call(CryptoService.getCurrencies);
    yield put(actions.getCurrencies.success(response));
  } catch (err) {
    yield put(actions.getCurrencies.error(err));
  }
}

export function* getTotalSaga() {
  try {
    const response = yield call(CryptoService.getTotal);
    yield put(actions.getTotal.success(response));
  } catch (err) {
    yield put(actions.getTotal.error(err));
  }
}

export function* currencySelectorSagaWatcher() {
  yield all([
    takeLatest(actions.getCurrencies.REQUEST, getCurrenciesSaga),
    takeLatest(actions.getTotal.REQUEST, getTotalSaga),
  ]);
}
