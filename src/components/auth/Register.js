import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormError from "../contact/FormError";
import { Container } from "react-bootstrap";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const schema = yup.object().shape({
    username: yup
        .string().required("Username is required")
        .min(2, 'Username is too short - should be 2 characters minimum.'),
    password: yup
        .string().required("A username is required")
        .min(2, 'Password is too short - should be 2 characters minimum.'),
});

function Register() {
    const history = useHistory();
    const { registerUser } = useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
    });

    function onSubmit(data) {
        console.log("data", data);
        registerUser(data.username);
        history.push("/admin");
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" placeholder="Username.." ref={register} />
                        {errors.username && <FormError>{errors.username.message}</FormError>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" placeholder="*****" ref={register} />
                        {errors.password && <FormError>{errors.password.message}</FormError>}
                    </Form.Group>
                    <Button className="login" type="submit">Login</Button>
                </Form>
            </Container>
        </>
    );
}

export default Register;