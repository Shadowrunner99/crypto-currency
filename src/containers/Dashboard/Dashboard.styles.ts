import styled from 'styled-components';

export const TitleContainer = styled('div')`
  display: flex;
  padding: 0 20px;

  & .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const CurrencyLogo = styled('img')`
  width: 16px;
  height: 16px;
  padding: 17px 0;
  margin-right: 8px;
`;

export const DashboardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 0 0 80%;
  max-width: 100%;
  text-align: left;
  padding: 6px 24px;
`;

export const CurrenciesContainer = styled('div')`
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
`;
