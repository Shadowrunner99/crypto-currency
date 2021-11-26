import styled from 'styled-components';

export const SearchBoxWrapper = styled('div')`
  padding: 18px;
`;

export const SearchBox = styled('input')`
  width: 100%;
  height: 28px;
  background: #ffffff;
  border: 1px solid #d1d5da;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 17px;

  &::focus {
    border: 1px solid #5d6bce;
  }
`;
