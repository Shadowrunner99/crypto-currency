import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCurrency, getCurrencies, getTotal, selectCurrency } from './actions';
import { selectors } from './reducer';
import CurrencyItem from '../../components/CurrencyItem';
import SearchBox from '../../components/SearchBox';
import * as Styles from './CurrencySelector.styles';
import { filteredData } from '../../global/helpers';
import { CURRENCY_SELECTOR } from './constants';

const CurrenciesSelector = () => {
  const dispatch = useDispatch();

  const handleSearch = (value) => dispatch(searchCurrency(value));
  const handleCurrencySelected = (value) => dispatch(selectCurrency(value));

  useEffect(() => {
    dispatch(getCurrencies.request());
    dispatch(getTotal.request());
  }, [dispatch]);

  const data = useSelector(selectors.cryptosData);
  const search = useSelector(selectors.search);
  const selectedCurrency = useSelector(selectors.selectedCrypto);
  const total = useSelector(selectors.total);

  return (
    <Styles.CurrencySelectorWrapper>
      <Styles.SearchWrapper>
        <h1>
          <img
            className="arrow-left"
            alt="arrow"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNjcgMGwyLjgzIDIuODI5LTkuMzM5IDkuMTc1IDkuMzM5IDkuMTY3LTIuODMgMi44MjktMTIuMTctMTEuOTk2eiIvPjwvc3ZnPg=="
          />

          {`${CURRENCY_SELECTOR.totalText}(${total})`}
        </h1>
        <SearchBox handleChangeSearch={handleSearch} />
      </Styles.SearchWrapper>
      {filteredData(data, search)?.map(({ currency, name, logo }) => {
        const className = currency === selectedCurrency ? 'active' : '';
        const realLogo = currency === selectedCurrency ? logo : CURRENCY_SELECTOR.blankImage;
        return (
          <CurrencyItem
            title={name}
            currency={currency}
            key={currency}
            classStatus={className}
            handleSelectCurrency={handleCurrencySelected}
            logo={realLogo}
          />
        );
      })}
    </Styles.CurrencySelectorWrapper>
  );
};

export default CurrenciesSelector;
