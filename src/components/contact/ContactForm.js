import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { BASE_URL } from "../../constants/api";
import Form from "react-bootstrap/Form";
import FormError from "./FormError";
import ContactValidation from "./ContactValidation";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

function ContactForm() {
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
    });

    const contact_url = BASE_URL + "/contacts"

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
                    <Form.Label>Subject</Form.Label>
                    <Form.Control name="subject" id="subject" placeholder="Subject of your issue.." ref={register} />
                    {errors.subject && <FormError>{errors.subject.message}</FormError>}
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="4" name="message" id="message" placeholder="Write a summary of the issue.." ref={register} />
                            {errors.message && <FormError>{errors.message.message}</FormError>}
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit" variant="info" className="submit-message">
                    Send Message
                </Button>
                <ContactValidation contactValidation={validated} />
            </Form>
        </Container>
    );
}

export default ContactForm;