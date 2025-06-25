import React from 'react';
import { Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom'

const Maintenance = () => {
    return (
        <div>
            <div className="bg-dark maintenance py-5">
                <Container>
                    <Row>
                        <div className="overlay-maintenance-card">
                            <Col md={5}>
                                <h1 className="text-primary"> İnternet Sitemiz <br />Yapım Aşamasındadır.</h1>
                                <p className="text-white">En Kısa Zamanda Sizlerle Görüşmek Üzere, Yakında Hizmete Gireceğiz.</p>
                                <Link to="https://www.instagram.com/klassanmobilya" role="button" target="_blank" className="btn btn-lg btn-primary mt-3 mx-1">
                                    <i className="ti ti-brand-instagram"></i></Link>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Maintenance;