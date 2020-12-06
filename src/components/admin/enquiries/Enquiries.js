import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import EnquiresList from "./EnquiresList"

function EnquiresAdmin() {

    return (
        <>
            <Container>
                <Tab.Container className="tab__container--admin">
                    <EnquiresList />
                </Tab.Container>
            </Container>
        </>

    );
}

export default EnquiresAdmin;