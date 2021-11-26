import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './CurrencyItem.styles';

const CurrencyItem = ({ currency, title, handleSelectCurrency, logo, classStatus }) => {
  return (
    <Styles.CurrencyWrapper onClick={() => handleSelectCurrency(currency)} className={classStatus}>
      <Styles.CurrencyContainer>
        <img src={logo} alt={title} className="currency-image" />
        <h2>{currency}</h2>
      </Styles.CurrencyContainer>
      <p>{title}</p>
    </Styles.CurrencyWrapper>
  );
};

CurrencyItem.propTypes = {
  currency: PropTypes.string,
  title: PropTypes.string,
  handleSelectCurrency: PropTypes.func,
  logo: PropTypes.string,
  classStatus: PropTypes.string,
};

CurrencyItem.defaultProps = {
  currency: null,
  title: null,
  handleSelectCurrency: null,
  logo: '',
  classStatus: PropTypes.string,
};

export default CurrencyItem;
