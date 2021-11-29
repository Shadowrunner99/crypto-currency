import React from 'react';
import * as Styles from './SearchBox.styles';

interface SearchBoxProps {
  handleChangeSearch: (value: string) => void;
}

export const SearchBox = ({ handleChangeSearch }: SearchBoxProps) => (
  <Styles.SearchBox
    type="text"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeSearch(e.target.value)}
    placeholder="Search"
  />
);

export default SearchBox;
