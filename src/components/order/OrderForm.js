import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { BASE_URL } from "../../constants/api";
import Form from "react-bootstrap/Form";
import FormError from "../contact/FormError";
import OrderValidation from "./OrderValidation";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const schema = yup.object().shape({
    client_name: yup
        .string()
        .required("Name is required")
        .min(2, 'Name is too short - should be 2 characters minimum.'),
    phone: yup
        .string()
        .required("phone number is required")
        .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i, 'Invalid phone number.'),
});

function OrderForm() {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
    });

    const contact_url = BASE_URL + "/orders"

    async function onSubmit(data) {
        console.log("data", data);;

        setValidated(true);

        fetch(contact_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="client_name" id="name" placeholder="Laura Croft" ref={register} />
                            {errors.client_name && <FormError>{errors.client_name.message}</FormError>}
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control name="email" id="email" placeholder="laura.croft@email.com" ref={register} />
                            {errors.email && <FormError>{errors.email.message}</FormError>}
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="phone" id="phone" placeholder="555 000 555." ref={register} />
                    {errors.phone && <FormError>{errors.phone.message}</FormError>}
                </Form.Group>

                <Button type="submit" variant="info" className="submit-message">
                    Confirm Reservation
                </Button>
                <OrderValidation orderValidation={validated} />
            </Form>
        </Container>

    );
}

export default OrderForm;