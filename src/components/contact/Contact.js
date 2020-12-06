import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from "./ContactForm";
import Footer from "../layout/Footer"
import Jumbotron from 'react-bootstrap/Jumbotron'

export function Contact() {
    return (
        <>
            <div className="contact-container">
                <Jumbotron fluid className="contact__enquire">
                    <Container>
                        <h2 className="contact__enquire--title">Got Any Enquiries for us?</h2>
                        <p className="contact_enquire--text">
                            Cras luctus turpis vitae felis vehicula aliquet. Donec leo enim, imperdiet eget lacus ac, gravida dictum mauris. Duis at mollis arcu. Maecenas vehicula nisl mi, quis dictum nisi auctor quis. Phasellus sem nisl, volutpat sed felis ac, eleifend consequat nibh. Nam ac massa feugiat, rutrum nunc et, rhoncus risus. Aenean nulla massa, accumsan mollis enim vitae, vestibulum pretium tortor. Fusce maximus libero ut ante tempor, eget pretium arcu rhoncus. Integer et tellus justo. Curabitur mollis, arcu eu auctor mattis, libero metus malesuada dui, eu venenatis lorem ante quis lorem. Maecenas feugiat eget justo laoreet aliquet.
                        </p>
                        <p className="contact_enquire--text">
                            Aenean nec hendrerit est. Praesent aliquam sem lacus, nec efficitur justo pretium in. Phasellus turpis odio, sagittis ut porta ut, laoreet ut mauris. Pellentesque consequat ex odio, in dignissim lectus posuere et. Ut non tortor enim. Nam in dui metus. Sed vitae velit pulvinar, venenatis orci non, mattis ipsum. Morbi eu laoreet tortor.
                        </p>
                    </Container>
                </Jumbotron>
                <Container>
                    <h1 className="contact__enquire--form">Contact Page</h1>
                    <ContactForm />
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
