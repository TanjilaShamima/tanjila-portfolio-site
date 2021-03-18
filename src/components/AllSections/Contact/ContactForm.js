import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactForm = () => {
    const handleHireMe = () =>{

    }
    return (
        <Container className="mb-5">
            <Row className="d-flex justify-content-center">
                {/* <Col md={6}>
                    <h1>Let me handle your<br/>project, professionally.</h1>
                    <p className="py-2">
                    <small>With well written codes,we build amazing apps for all platforms,<br/>mobile and web apps in general.</small>
                    </p>
                </Col> */}
                <Col md={6}>
                    <Form onSubmit={handleHireMe} action="https://formspree.io/f/xqkgbbjd"  method="POST">
                        <Form.Group>
                            <Form.Control name="email" type="email" placeholder="Your email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control name="name" type="text" placeholder="Your name/company name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="message"  as="textarea" rows="5" placeholder="Your message" />
                        </Form.Group>
                        <Button style={{marginLeft: '30%'}} className="px-5" variant="dark" type="submit">
                            Send Message
                        </Button>
                        {/* <p className="text-danger">{resStatus}</p> */}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactForm;