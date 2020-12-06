import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Review() {
    return (
        <div className="review-container">
            <Row>
                <Col md={6}>
                    <h2 className="review">Review</h2>
                    <h1 className="review__quote"><i className="fas fa-quote-left"></i></h1>
                    <p className="review__text">
                        Cras luctus turpis vitae felis vehicula aliquet. Donec leo enim, imperdiet eget lacus ac, gravida dictum mauris. Duis at mollis arcu. Maecenas vehicula nisl mi, quis dictum nisi auctor quis. Phasellus sem nisl, volutpat sed felis ac, eleifend consequat nibh. Nam ac massa feugiat, rutrum nunc et, rhoncus risus. Aenean nulla massa, accumsan mollis enim vitae, vestibulum pretium tortor. Fusce maximus libero ut ante tempor, eget pretium arcu rhoncus. Integer et tellus justo. Curabitur mollis, arcu eu auctor mattis, libero metus malesuada dui, eu venenatis lorem ante quis lorem. Maecenas feugiat eget justo laoreet aliquet.
                   </p>
                    <p className="review__text--rating">&#9733; &#9733; &#9733; &#9733; &#9733;<span>NATHAN DRAKE</span></p>
                </Col>
                <Col md={6}>
                    <h2 className="review">Review</h2>
                    <h1 className="review__quote"><i className="fas fa-quote-left"></i></h1>
                    <p className="review__text">
                        Cras luctus turpis vitae felis vehicula aliquet. Donec leo enim, imperdiet eget lacus ac, gravida dictum mauris. Duis at mollis arcu. Maecenas vehicula nisl mi, quis dictum nisi auctor quis. Phasellus sem nisl, volutpat sed felis ac, eleifend consequat nibh. Nam ac massa feugiat, rutrum nunc et, rhoncus risus. Aenean nulla massa, accumsan mollis enim vitae, vestibulum pretium tortor. Fusce maximus libero ut ante tempor, eget pretium arcu rhoncus. Integer et tellus justo. Curabitur mollis, arcu eu auctor mattis, libero metus malesuada dui, eu venenatis lorem ante quis lorem. Maecenas feugiat eget justo laoreet aliquet.
                   </p>
                    <p className="review__text--rating">&#9733; &#9733; &#9733; &#9733; &#9733;<span>LAURA CROFT</span></p>
                </Col>
            </Row>
        </div>
    );
}

export default Review;