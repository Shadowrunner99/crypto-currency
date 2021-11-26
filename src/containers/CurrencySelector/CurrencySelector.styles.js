import styled from 'styled-components';

export const CurrencySelectorWrapper = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 20%;
  max-width: 20%;
  min-height: 1080px;
  margin: 0;
  border-right: 1px solid #e1e4e8;
  text-align: left;

  & .arrow-left {
    align-self:center;
    width: 10px;
    height: 10px;
    margin-right: 13px;
  }

  & .active {
    border-right: 2px solid #5d6bce;
    background: #f5f7ff;
  }

  & .total {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #444d56;
    margin: 0;
  }

  & .total-wrapper {
    display: flex;
    padding: 8px 0;
  }
  
`;

export const SearchWrapper = styled('div')`
  padding: 16px;
`;
