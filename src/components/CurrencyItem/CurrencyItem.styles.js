import styled from 'styled-components';

export const CurrencyWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  padding: 10px 18px;
  min-height: 100px;
  text-align: left;
  cursor: pointer;
  border-top: 1px solid #e1e4e8;

  &:last-child {
    border-bottom: 1px solid #e1e4e8;
  }

  & .active {
    border-right: 2px solid #5d6bce;
  }

  &:hover {
    border-right: 2px solid #5d6bce;
  }

  & p {
    color: #6a737d;
  }

  & .currency-image {
    width: 24px;
    height: 24px;
  }
`;
export const CurrencyContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;

  & h2 {
    margin: 0;
  }

  & img {
    margin-right: 5px;
  }
`;
