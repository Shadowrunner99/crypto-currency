import { all } from 'redux-saga/effects';
import { currencySelectorSagaWatcher } from './containers/CurrencySelector/saga';

export default function* rootSaga() {
  yield all([currencySelectorSagaWatcher()]);
}
