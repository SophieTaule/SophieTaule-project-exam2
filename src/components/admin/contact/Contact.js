import React from 'react';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';
import ContactItem from "./ContactList"

function ContactAdmin() {

    return (
        <>
            <Container>
                <Tab.Container defaultActiveKey="first">
                    <ContactItem />
                </Tab.Container>
            </Container>
        </>
    );
}

export default ContactAdmin;