import { currencySelectorSagaWatcher } from '../containers/Currency-Selector/saga';
import rootSaga from '../rootSaga';
import { all } from 'redux-saga/effects';

describe('Root Saga', () => {
  let generator = null;
  let expected;

  beforeAll(() => {
    generator = rootSaga();
  });

  it('should call generator function', () => {
    expected = all([currencySelectorSagaWatcher()]);
    const actual = generator.next();
    expect(actual.value).toEqual(expected);
  });
});
