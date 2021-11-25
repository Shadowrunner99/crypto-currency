import styled from 'styled-components';

export const CurrencyInfoWrapper = styled('div')`
display:flex;
flex:0 0 27.3%;
max-width:310px;
min-width:130px;
margin-right:15px;
margin-bottom:15px;
padding:5px;
align-item:flex-start;
border:1px solid #E1E4E8;
border-radius:5px;
background: #FAFBFC;

@media (max-width: 728px) {
    flex: 0 1 100%;
    max-width:100%;
}
`;

export const CurrencyLogoWrapper = styled('div')`
padding:0.83em 13px;
`;

export const CurrencyLogo = styled('img')`
width:48px;
height:48px;
border-radius:50%;
`;

export const CurrencyInfo = styled('div')`
display:flex;
flex-flow:column nowrap;
font-weight: 600;
flex:1 1 auto;

& .currency-title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #444D56;
}

& .currency {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #959DA5;
}

& .change-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #6A737D;
    margin-top:0;
}

& .price {
    margin:0;
    margin-bottom:4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #24292E;
}

& .price-title {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #6A737D;
}

& .inc {
   color:#8BC34A;
}

& .dec {
   color:#DB4949;
}

`;

export const ChangeWrapper = styled('div')`
display:flex;
padding-top:16px;
margin-bottom:6px;
`;

export const ChangeText = styled('span')`
font-size: 18px;
font-weight: 600;
line-height: 24px;
margin-right:5px;
`;

export const ChangeIcon = styled('img')`
height: 12px;
align-self: center;
`;

export const PricesWrapper = styled('div')`
display:flex;
flex-flow:row nowrap;
border-top:1px solid #E1E4E8;
padding:5px 0;
`;

export const PriceInfo = styled('div')`
border-right:1px solid #E1E4E8;
flex:1 1 auto;
padding:5px;

&:last-child {
    border-right:none;
}
`;