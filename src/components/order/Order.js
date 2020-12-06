import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { EST_URL } from "../../constants/api";
import { Container } from "react-bootstrap";
import Review from "../module/Review";
import Footer from "../layout/Footer"
import { BASE_URL } from "../../constants/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import OrderForm from "./OrderForm"

function EstablishmentPageDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    var imagePlaceholder;

    let { id } = useParams();

    const url = EST_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if (!loading) {
        if (detail.image.length === 0) {
            imagePlaceholder = "./placeholder__img-500x200.png"
        }
        else {
            imagePlaceholder = BASE_URL + detail.image[0].formats.medium.url;
        }
    }

    if (loading) {
        return <h1 ><Spinner animation="border" className="spinner" variant="info" />Loading Page..</h1>
    }

    return (
        <>
            <Container>
                <h3 className="cart-title">Reservation order:</h3>
                <div className="cart-container">

                    <Row className="cart__row">
                        <Col sm={4} className="cart__img--col">
                            <Image className="cart__img" src={imagePlaceholder} />
                        </Col>
                        <Col sm={5} className="cart__info--col">
                            <div className="cart__info">
                                <h2 className="cart__info--title">{detail.name}</h2>
                                <p className="cart__info--text">{detail.establishment_type}</p>
                                <p className="cart__info--rating">{detail.rating} &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                <p className="cart__info--text"><FontAwesomeIcon icon={faMapMarkerAlt} />
                                    {detail.distance} km distance from city</p>
                            </div>
                        </Col>
                        <Col sm={3} className="cart__pay--col">
                            <div className="cart__pay">
                                <p className="cart__pay--text">Total</p>
                                <h4 className="cart__pay--price">{detail.price}</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
                <OrderForm />
                <Review />
            </Container >
            <Footer />
        </>
    );
}

export default EstablishmentPageDetail;