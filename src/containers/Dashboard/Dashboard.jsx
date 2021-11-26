import React from 'react';
import { useSelector } from 'react-redux';
import { DASHBOARD } from './constants';
import * as Styles from './Dashboard.styles';
import CryptoInfo from '../../components/CryptoInfo';
import { selectors } from '../Currency-Selector/reducer';
import { filteredCurrency } from '../../global/helpers';
import CurrencySelector from '../Currency-Selector';
import Logo from '../../global/images/btc.png';

const Dashboard = () => {
  const data = useSelector(selectors.cryptosData);
  const selectedCrypto = useSelector(selectors.selectedCrypto);

  return (
    <>
      <CurrencySelector />
      <Styles.DashboardWrapper>
        <Styles.TitleContainer>
          <Styles.CurrencyLogo src={Logo} alt="logo" />
          <h1 className="title">{DASHBOARD.title}</h1>
        </Styles.TitleContainer>
        <Styles.CurrenciesContainer>
          {filteredCurrency(data, selectedCrypto)?.map(
            ({ currency, name, sell_price, buy_price, current_change, logo }) => (
              <CryptoInfo
                title={name}
                currency={currency}
                buy={buy_price}
                sale={sell_price}
                change={current_change}
                logo={logo}
                key={`${currency}_info`}
              />
            ),
          )}
        </Styles.CurrenciesContainer>
      </Styles.DashboardWrapper>
    </>
  );
};

export default Dashboard;
