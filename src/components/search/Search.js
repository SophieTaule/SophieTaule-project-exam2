import React from 'react';
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search({ filterSearch }) {
    return (
        <InputGroup className="Search">
            <FormControl placeholder="Search by Name..." onChange={event => filterSearch(event)} />
        </InputGroup>
    );
}

Search.propTypes = {
    filterSearch: PropTypes.func.isRequired
};

export default Search;