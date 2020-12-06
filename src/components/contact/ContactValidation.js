import React from "react";
import PropTypes from "prop-types";

function ContactValidation({ contactValidation }) {
    if (contactValidation) {
        return <h3 className="contact-validation">Your message has been sent.</h3>
    }
    return null;
}

ContactValidation.propTypes = {
    contactValidation: PropTypes.bool.isRequired,
};

export default ContactValidation;