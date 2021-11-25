import styled from 'styled-components';

export const CurrencyInfoWrapper = styled('div')`
display:flex;
flex:0 0 27.3333%;
max-width:27.3333%;
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
width:32px;
height:32px;
border-radius:50%;
`;

export const CurrencyInfo = styled('div')`
display:flex;
flex-flow:column nowrap;
font-weight: 600;
flex:1 1 auto;

& h2 {
    font-size: 16px;
    line-height: 20px;
}

& p {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #6A737D;
}

& span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #959DA5;
}
`;

export const ChangeWrapper = styled('div')`
display:flex;
`

export const ChangeText = styled('span')`
font-size: 18px!important;
font-weight: 600!important;
line-height: 24px!important;

`;
export const ChangeIcon = styled('img')`
height: 12px;
align-self: center;
padding: 3px;
`;

export const PricesWrapper = styled('div')`
display:flex;
flex-flow:row wrap;
border-top:1px solid #E1E4E8;
`;
export const PriceInfo = styled('div')`
border-right:1px solid #E1E4E8;
flex:1 1 auto;
padding:5px;

&:last-child {
    border-right:none;
}

& p {
font-size: 14px;
color: #24292E;
}

& span {
font-size: 12px;
color: #6A737D;
}
`;