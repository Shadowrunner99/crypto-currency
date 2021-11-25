import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./SearchBox.styles";

export const SearchBox = ({ handleChangeSearch }) => (
    <Styles.SearchBox type="text" onChange={(e) => handleChangeSearch(e.target.value)} placeholder="Search"/>
)


SearchBox.propTypes = {
    handleChangeSearch: PropTypes.func.isRequired
}

export default SearchBox;