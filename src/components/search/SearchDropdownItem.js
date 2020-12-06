import React from 'react';
import PropTypes from "prop-types";
import { BASE_URL } from "../../constants/api";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function SearchDropdownItem({ id, title, image, establishment_type }) {

    var imagePlaceholder;

    if (image.length === 0) {
        imagePlaceholder = "https://via.placeholder.com/500x200"
    }
    else {
        imagePlaceholder = BASE_URL + image[0].formats.medium.url;
    }

    return (
        <>
            <div className="search__dropdown" eventKey={id}>
                <div className="search__dropdown--content">
                    <Row>
                        <Col md={3}>
                            <img className="search__dropdown--img" variant="top" src={imagePlaceholder} alt="establishment img small" />
                        </Col>
                        <Col md={3}>
                            <p className="search__dropdown--text"><b> {title}</b></p>
                        </Col>
                        <Col md={3}>
                            <p className="search__dropdown--text">| {establishment_type}</p>
                        </Col>
                        <Col md={3}>
                            <p className="search__dropdown--text"> <a className="search__dropdown--btn" href={"establishment/" + id}>View</a></p>
                        </Col>
                    </Row>

                </div>
            </div>

        </>
    );
}

SearchDropdownItem.propTypes = {
    title: PropTypes.string.isRequired
}
export default SearchDropdownItem;