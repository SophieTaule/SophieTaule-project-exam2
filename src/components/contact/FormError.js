import React from "react";
import PropTypes from "prop-types";

function FormError({ children }) {
    return (
        <div className="error">{children}</div>
    );
}

FormError.propTypes = {
    children: PropTypes.node.isRequired,
};
export default FormError;