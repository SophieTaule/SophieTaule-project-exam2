import React from "react";
import PropTypes from "prop-types";

function OrderValidation({ orderValidation }) {
    if (orderValidation) {
        return <>
            <h3 className="contact-validation">Your Order has been placed.</h3>
            <p className="contact-validation__text">You will receive receipt and invoice by email. </p>
        </>
    }
    return null;
}

OrderValidation.propTypes = {
    orderValidation: PropTypes.bool.isRequired,
};

export default OrderValidation;