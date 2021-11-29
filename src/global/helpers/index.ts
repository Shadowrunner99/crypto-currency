import { CurrencyResponseItemProps, CurrencyItemProps } from '../types';

export const filteredData = (arr: CurrencyItemProps[], search: string | null) =>
  search
    ? arr?.filter(
        ({ name, currency }) =>
          name.toLowerCase().includes(search.toLowerCase()) ||
          currency.toLowerCase().includes(search.toLowerCase()),
      )
    : arr;

export const filteredCurrency = (arr: CurrencyResponseItemProps[], cur: string | null) =>
  cur ? arr?.filter(({ currency }) => currency === cur) : arr;
