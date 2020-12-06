import React from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../constants/api";
import { useState } from "react";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormError from "../contact/FormError";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ContactValidation from "./../contact/ContactValidation";
import PropTypes from "prop-types";

const schema = yup.object().shape({
    client_name: yup
        .string().required("Name is required")
        .min(2, 'Name is too short - should be 2 characters minimum.'),
    subject: yup
        .string().required("Name is required")
        .min(2, 'Name is too short - should be 2 characters minimum.'),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address.'),
    message: yup
        .string().required("message to short")
        .min(10, 'message is too short - should be 10 characters minimum.'),
});

function Enquiry({ title }) {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    const enquires_url = BASE_URL + "/enquires"

    async function onSubmit(data) {
        console.log("data", data);;
        setValidated(true);

        fetch(enquires_url, {
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
                <h2 className="enquiry__title">Leave an Enquiry</h2>
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
                    <Form.Label>Subject</Form.Label>
                    <Form.Control name="subject" id="subject" placeholder="Subject of your enquiry.." ref={register} />
                    {errors.subject && <FormError>{errors.subject.message}</FormError>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Establishment</Form.Label>
                    <Form.Control name="establishment" id="establishment" value={title} placeholder={title} disabled ref={register} />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="4" name="message" id="message" placeholder="Write a description of your enquiry here.." ref={register} />
                            {errors.message && <FormError>{errors.message.message}</FormError>}
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" variant="info" className="submit-message">
                    Send Enquiry
            </Button>
                <ContactValidation contactValidation={validated} />
            </Form>
        </Container>

    );
}
Enquiry.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.array.isRequired
}
export default Enquiry;