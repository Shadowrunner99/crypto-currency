import React from 'react';
import { CRYPTO_INFO } from './constants';
import * as Styled from './CryptoInfo.styles';
import inc from '../../global/images/inc.png';
import dec from '../../global/images/dec.png';
import './style.css';

interface CryptoInfoProps {
  currency: string;
  title: string;
  buy: number;
  sale: number;
  change: number;
  logo: string;
}

const CryptoInfo = ({ currency, title, buy, sale, change, logo }: CryptoInfoProps) => {
  return (
    <Styled.CurrencyInfoWrapper>
      <Styled.CurrencyLogoWrapper>
        <Styled.CurrencyLogo src={logo} alt={title} />
      </Styled.CurrencyLogoWrapper>
      <Styled.CurrencyInfo>
        <h2 className="currency-title">{title}</h2>
        <span className="currency">{currency}</span>
        <Styled.ChangeWrapper>
          <Styled.ChangeText className={change >= 0 ? 'inc' : 'dec'}>{change}</Styled.ChangeText>
          <Styled.ChangeIcon src={change >= 0 ? inc : dec} alt="change" />
        </Styled.ChangeWrapper>
        <p className="change-title">{CRYPTO_INFO.changeText}</p>
        <Styled.PricesWrapper>
          <Styled.PriceInfo>
            <p className="price">{buy}</p>
            <span className="price-title">{CRYPTO_INFO.buyText}</span>
          </Styled.PriceInfo>
          <Styled.PriceInfo>
            <p className="price">{sale}</p>
            <span className="price-title">{CRYPTO_INFO.sellText}</span>
          </Styled.PriceInfo>
        </Styled.PricesWrapper>
      </Styled.CurrencyInfo>
    </Styled.CurrencyInfoWrapper>
  );
};

export default CryptoInfo;
