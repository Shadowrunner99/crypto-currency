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
    width: 10px;
    height: 10px;
  }

  & .active {
    border-right: 2px solid #5d6bce;
    background: #f5f7ff;
  }

  & h1 {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #444d56;
  }
`;

export const SearchWrapper = styled('div')`
  padding: 18px;
`;
