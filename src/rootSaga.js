import { all } from "redux-saga/effects";
import { currencySelectorSagaWatcher } from "./containers/Currency-Selector/saga";

export default function* rootSaga() {
    console.log('root');
    yield all([
        currencySelectorSagaWatcher()
    ]);
}