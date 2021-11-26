export const filteredData = (arr, search) =>
  search
    ? arr?.filter(
        ({ name, currency }) =>
          name.toLowerCase().includes(search.toLowerCase()) ||
          currency.toLowerCase().includes(search.toLowerCase()),
      )
    : arr;

export const filteredCurrency = (arr, cur) =>
  cur ? arr?.filter(({ currency }) => currency === cur) : arr;
