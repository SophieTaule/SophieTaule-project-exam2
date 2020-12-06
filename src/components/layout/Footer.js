import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <div className="footer">
            <Row>
                <Col md={4}>
                    <div className="footer__info">
                        <h3 className="footer__info--title">Need help?</h3>
                        <p className="footer__info--text">Enquiry: If you have any enquiry for your travel, you can leave it with the establishment page</p>
                        <p className="footer__info--text">Contact Us: Any issues we can help with, go to Contact page </p>
                        <p className="footer__info--copyright"> Holidaze &copy; 2020</p>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="footer__contact">
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>Nygaten 5050</span> Bergen, Norway</p>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <p> (+47) 0000 000 000</p>

                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <p>holidaze@support.com</p>
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="footer__contact">
                        <h4 className="footer__contact--title"> About Holidaze</h4>
                        <p className="footer__contact--text">
                            Aenean nec hendrerit est. Praesent aliquam sem lacus, nec efficitur justo pretium in. Phasellus turpis odio, sagittis ut porta ut, laoreet ut mauris. Pellentesque consequat ex odio, in dignissim lectus posuere et. Ut non tortor enim. Nam in dui metus. Sed vitae velit pulvinar, venenatis orci non, mattis ipsum. Morbi eu laoreet tortor.
                    </p>
                        <div className="footer__contact--icons">
                            <a href="#/face"><i className="fab fa-facebook"></i></a>
                            <a href="#/face"><i className="fab fa-twitter"></i></a>
                            <a href="#/face"><i className="fab fa-linkedin"></i></a>
                            <a href="#/face"><i className="fab fa-tripadvisor"></i></a>
                            <a href="#/face"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;