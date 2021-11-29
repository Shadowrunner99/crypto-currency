import React from 'react';
import * as Styles from './CurrencyItem.styles';

interface CurrencyItemProps {
  currency: string;
  title: string;
  handleSelectCurrency: (currency: string) => void;
  logo: string;
  classStatus: string;
}

const CurrencyItem = ({
  currency,
  title,
  handleSelectCurrency,
  logo,
  classStatus,
}: CurrencyItemProps) => {
  return (
    <Styles.CurrencyWrapper onClick={() => handleSelectCurrency(currency)} className={classStatus}>
      <div className="currency-wrap">
        <img src={logo} alt={title} className="currency-image" />
        <Styles.CurrencyContainer>
          <h2 className="currency currency-symbol">{currency}</h2>
          <p className="currency currency-title">{title}</p>
        </Styles.CurrencyContainer>
      </div>
    </Styles.CurrencyWrapper>
  );
};

export default CurrencyItem;
