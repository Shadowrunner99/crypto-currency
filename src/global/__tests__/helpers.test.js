import { filteredCurrency, filteredData } from '../helpers';

describe('Global helpers', () => {
  describe('filteredData', () => {
    let searchPhrase;
    const data = [
      {
        buy_price: 1000,
        currency: 'BTC',
        current_change: 1000,
        logo: 'test',
        name: 'Bitcoin',
        sell_price: 1000,
      },
      {
        buy_price: 1000,
        currency: 'OTHER',
        current_change: 1000,
        logo: 'test',
        name: 'Other',
        sell_price: 1000,
      },
    ];
    const expectedResult = [
      {
        buy_price: 1000,
        currency: 'BTC',
        current_change: 1000,
        logo: 'test',
        name: 'Bitcoin',
        sell_price: 1000,
      },
    ];

    it('should filter data correctly by currencies names', () => {
      searchPhrase = 'Bit';
      expect(filteredData(data, searchPhrase)).toEqual(expectedResult);
    });

    it('should filter data correctly by currency', () => {
      searchPhrase = 'BTC';
      expect(filteredData(data, searchPhrase)).toEqual(expectedResult);
    });
  });

  describe('filteredCurrency', () => {
    let currency;
    const data = [
      {
        buy_price: 1000,
        currency: 'BTC',
        current_change: 1000,
        logo: 'test',
        name: 'Bitcoin',
        sell_price: 1000,
      },
      {
        buy_price: 1000,
        currency: 'OTHER',
        current_change: 1000,
        logo: 'test',
        name: 'Other',
        sell_price: 1000,
      },
    ];
    const expectedResult = [
      {
        buy_price: 1000,
        currency: 'BTC',
        current_change: 1000,
        logo: 'test',
        name: 'Bitcoin',
        sell_price: 1000,
      },
    ];

    it('should filter currencies correctly', () => {
      currency = 'BTC';
      expect(filteredCurrency(data, currency)).toEqual(expectedResult);
    });

    it('should return all data when currency equal null', () => {
      currency = null;
      expect(filteredCurrency(data, currency)).toEqual(data);
    });
  });
});
