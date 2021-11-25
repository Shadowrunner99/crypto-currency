import React from "react";
import PropTypes from "prop-types";
import { CRYPTO_INFO } from "./constants";
import "./style.css";
import * as Styled from "./CryptoInfo.styles";
import inc from '../../global/images/inc.png';
import dec from '../../global/images/dec.png';

const CryptoInfo = ({ currency, title, buy, sale, change, logo }) => {

    return (
        <Styled.CurrencyInfoWrapper>
            <Styled.CurrencyLogoWrapper>
                <Styled.CurrencyLogo src={logo} alt={title}/>
            </Styled.CurrencyLogoWrapper>
            <Styled.CurrencyInfo>
                <h2>{title}</h2>
                <span>{currency}</span>
                <Styled.ChangeWrapper>
                    <Styled.ChangeText className={change >= 0 ? 'inc' : 'dec'}>{change}</Styled.ChangeText>
                    <Styled.ChangeIcon src={change >= 0 ? inc : dec} alt="change" />
                </Styled.ChangeWrapper>
                <p>{CRYPTO_INFO.changeText}</p>
                <Styled.PricesWrapper>
                    <Styled.PriceInfo>
                        <p>{buy}</p>
                        <span>{CRYPTO_INFO.buyText}</span>
                    </Styled.PriceInfo>
                    <Styled.PriceInfo>
                        <p>{sale}</p>
                        <span>{CRYPTO_INFO.sellText}</span>
                    </Styled.PriceInfo>
                </Styled.PricesWrapper>
            </Styled.CurrencyInfo>
        </Styled.CurrencyInfoWrapper>
    )
}

CryptoInfo.propTypes = {
    currency: PropTypes.string,
    title: PropTypes.string,
    buy: PropTypes.number,
    sale: PropTypes.number,
    change: PropTypes.number, 
    logo: PropTypes.string,
}

CryptoInfo.defaultProps = {
    currency: '',
    title: '',
    buy: 0,
    sale: 0,
    change: 0, 
    logo: '',
}

export default CryptoInfo;