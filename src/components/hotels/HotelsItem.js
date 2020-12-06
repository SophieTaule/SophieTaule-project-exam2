import React from 'react';
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { BASE_URL } from "../../constants/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function HotelsItem({ id, title, image, rating, distance, price, price_adult, establishment_type }) {
    const totalprice = price + price_adult;
    var imagePlaceholder;

    if (image.length === 0) {
        imagePlaceholder = "./placeholder__img-500x200.png"
    }
    else {
        imagePlaceholder = BASE_URL + image[0].formats.medium.url;
    }

    return (
        <div className="card-container">
            <Card className="card__establishment">
                <Card.Img className="card__establishment--img" variant="top" src={imagePlaceholder} alt="establishment img small" />
                <Card.Body className="card__establishment--body">
                    <Row className="justify-content-md-center">
                        <Col xs={8} className="card__establishment--col-header">
                            <span className="card__establishment--span">| {establishment_type}</span>
                            <Card.Title className="card__establishment__title">{title}</Card.Title>
                            <div className="card__establishment--info">
                                <p className="card__establishment--rating">{rating} &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                <span className="card__establishment--span"><FontAwesomeIcon icon={faMapMarkerAlt} /> {distance}km distance from city</span>
                            </div>
                        </Col>
                        <Col xs={4} className="card__establishment--col-price">
                            <p className="card__establishment--text">From</p>
                            <h5 className="card__establishment--price"><a href={"establishment/" + id}>{totalprice}</a></h5>
                            <p className="card__establishment--text">Per Night</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

HotelsItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.array.isRequired,
    rating: PropTypes.number,
    rating_font: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    price_adult: PropTypes.number.isRequired,
    establishment_type: PropTypes.string.isRequired
}
export default HotelsItem;