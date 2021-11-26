import styled from 'styled-components';

export const CurrencyWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  padding: 0 18px;
  min-height: 100px;
  text-align: left;
  cursor: pointer;

  & .active {
    border-right: 2px solid #5d6bce;
  }

  &:hover {
    border-right: 2px solid #5d6bce;
  }

  & .currency-wrap {
    display: flex;
    border-top: 1px solid #e1e4e8;
    padding: 27px 0;
  }

  .currency-wrap:last-child {
    border-bottom: 1px solid #e1e4e8;
  }

  & .currency-image {
    width: 12px;
    height: 12px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;
export const CurrencyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & .currency {
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }

  & .currency-image {
    margin-right: 5px;
  }

  & .currency-symbol {
    color: #24292e;
    margin-bottom: 8px;
  }

  & .currency-title {
    color: #6a737d;
  }
`;
