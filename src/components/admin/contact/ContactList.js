import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BASE_URL } from "../../../constants/api";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function ContactItem() {
    const [contact, setEnquires] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = BASE_URL + "/contacts";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setEnquires(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);


    if (loading) {
        return <h1 ><Spinner animation="border" className="spinner" variant="info" />Loading Page..</h1>
    }
    return (
        <>
            <h1 className="admin-title">Contact Messages</h1>

            {contact.map((contact) => {
                return (

                    <Row key={contact.id} className="tab__admin--row">
                        <Col sm={3} className="tab__admin--col">
                            <Nav variant="pills" className="flex-column tab__admin--nav" id="tab__admin--nav">
                                <Nav.Item className="tab__admin--nav-item">
                                    <Nav.Link eventKey={contact.id} className="tab__admin--link">
                                        <p className="tab__admin--text"><b>{contact.client_name}</b></p>
                                        <p className="tab__admin--text">{contact.subject}</p>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className="content__admin--col">
                            <Tab.Content className="content__admin">
                                <Tab.Pane className="content__admin--pane" eventKey={contact.id}>
                                    <Row>
                                        <Col sm={9}>
                                            <h1 className="content__admin--client-name"><strong>From:</strong> {contact.client_name}</h1>
                                            <h2 className="content__admin--email"><strong>Email: </strong>{contact.email}</h2>
                                        </Col>
                                        <Col sm={3}>
                                            <span className="content__admin--text">Date: {contact.created_at}</span>
                                        </Col>
                                    </Row>
                                    <p className="content__admin--text">{contact.message}</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                );
            })}
        </>
    );
}

export default ContactItem;
