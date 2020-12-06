
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { EST_URL } from "../../constants/api";
import { Container } from "react-bootstrap";
import Review from "../module/Review";
import Footer from "../layout/Footer"
import { BASE_URL } from "../../constants/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import EnquiryForm from "./EnquiryForm";

function EstablishmentPageDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    var imagePlaceholder;
    var imageShowcasePlaceholder1;
    var imageShowcasePlaceholder2;
    var imageShowcasePlaceholder3;

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
        if (detail.image.length === 0) {
            imageShowcasePlaceholder1 = "./placeholder__img-500x200.png"
        }
        else {
            imageShowcasePlaceholder1 = BASE_URL + detail.image_showcase[0].formats.thumbnail.url;
        }
        if (detail.image.length === 0) {
            imageShowcasePlaceholder2 = "./placeholder__img-500x200.png"
        }
        else {
            imageShowcasePlaceholder2 = BASE_URL + detail.image_showcase[1].formats.thumbnail.url;
        }
        if (detail.image.length === 0) {
            imageShowcasePlaceholder3 = "./placeholder__img-500x200.png"
        }
        else {
            imageShowcasePlaceholder3 = BASE_URL + detail.image_showcase[2].formats.thumbnail.url;
        }
    }
    if (loading) {
        return <h1 ><Spinner animation="border" className="spinner" variant="info" />Loading Page..</h1>
    }

    return (
        <>
            <Container className="detail__container">
                <Row>
                    <Col xl={6}>
                        <div className="detail">
                            <div className="detail__text">
                                <h1 className="detail__text--title">{detail.name}</h1>
                                <Row>
                                    <Col xl={6}>
                                        <p className="detail__text--distance"><FontAwesomeIcon icon={faMapMarkerAlt} /> {detail.distance}km distance from city</p>
                                    </Col>
                                    <Col xl={6}>
                                        <p className="detail__text--rating">{detail.rating} &#9733; &#9733; &#9733; &#9733; &#9733;</p>
                                    </Col>
                                </Row>
                            </div>
                            <Image className="detail__image--main" fluid src={imagePlaceholder} />
                            <Row className="detail__image--row">
                                <Col sm={4}>
                                    <Image className="detail__image" fluid src={imageShowcasePlaceholder1} />
                                </Col>
                                <Col sm={4}>
                                    <Image className="detail__image" fluid src={imageShowcasePlaceholder2} />
                                </Col>
                                <Col sm={4}>
                                    <Image className="detail__image" fluid src={imageShowcasePlaceholder3} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={6} className="reservation-col">
                        <div className="reservation">
                            <h2 className="reservation__title">Make a reservation</h2>
                            <Row className="reservation__sum">
                                <Col sm={3}>
                                    <p className="reservation__sum--total">Total</p>
                                </Col>
                                <Col sm={9}>
                                    <h3 className="reservation__sum--price">$ {detail.price}</h3>
                                </Col>
                            </Row>
                            <Button href={"/order/" + id} className="reservation__btn">Book</Button>
                        </div>
                    </Col>
                </Row>

                <div>
                    <Row>
                        <Col xl={8}>
                            <div className="description">
                                <div className="description__icon">
                                    <h4 className="descriptionn__icon--guest"><FontAwesomeIcon icon={faBed} /> {detail.max_guests}</h4>
                                    <h4 className="description__icon--inclusive"> {detail.all_inclusive}</h4>
                                </div>
                                <div className="description__text">
                                    <h2 className="description__text--title">Description</h2>
                                    <p className="description__text--body">{detail.description}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={8}>
                        <div className="enquiry-container">
                            <EnquiryForm title={detail.name} />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="map">
                            <iframe title='map' className="map__iframe" src={detail.location}></iframe>
                        </div>
                    </Col>
                </Row>
                <Review />
            </Container >
            <Footer />
        </>
    );
}

export default EstablishmentPageDetail;