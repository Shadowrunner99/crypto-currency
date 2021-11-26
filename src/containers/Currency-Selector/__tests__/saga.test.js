import { put, call, all, take } from 'redux-saga/effects';
import * as actions from '../actions';
import CryptoService from '../../../global/service';
import { getCurrenciesSaga, getTotalSaga } from '../saga';

jest.mock('../../../global/service', () => {
  return {
    getCurrencies: jest.fn(),
    getTotal: jest.fn(),
  };
});

describe('CurrencySelector saga', () => {
  describe('getCurrenciesSaga', () => {
    let expected,
      actual,
      generator = null,
      response = [],
      error = { response: { status: 404 }, message: 'error' };

    beforeEach(() => {
      generator = getCurrenciesSaga();
    });

    it('should call generator functions', () => {
      CryptoService.getCurrencies.mockImplementationOnce(() => {
        return Promise.resolve(response);
      });
      expected = call(CryptoService.getCurrencies);
      actual = generator.next(response);
      expect(actual.value).toEqual(expected);

      expected = put(actions.getCurrencies.success(response));
      actual = generator.next(response);
      expect(actual.value).toEqual(expected);
    });

    it('should call error generator function', () => {
      expected = put(actions.getCurrencies.error(error));
      generator.next(response);
      actual = generator.throw(error);
      expect(actual.value).toEqual(expected);
    });
  });

  describe('getTotalSaga', () => {
    let expected,
      actual,
      generator = null,
      response = [],
      error = { response: { status: 404 }, message: 'error' };

    beforeEach(() => {
      generator = getTotalSaga();
    });

    it('should call generator functions', () => {
      CryptoService.getTotal.mockImplementationOnce(() => {
        return Promise.resolve(response);
      });
      expected = call(CryptoService.getTotal);
      actual = generator.next(response);
      expect(actual.value).toEqual(expected);

      expected = put(actions.getTotal.success(response));
      actual = generator.next(response);
      expect(actual.value).toEqual(expected);
    });

    it('should call error generator function', () => {
      expected = put(actions.getTotal.error(error));
      generator.next(response);
      actual = generator.throw(error);
      expect(actual.value).toEqual(expected);
    });
  });
});
