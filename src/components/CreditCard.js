import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMobile, faShoppingCart, faWallet, } from "@fortawesome/free-solid-svg-icons";
import creditCard from "../assets/cartaocredito.webp";
import "./CreditCard.scss";

const CreditCard = () => (
    <Container className="my-5">
        <Row>
            <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
                <Row>
                    <h2 className="my-5 credit-card-title">Cartão de crédito</h2>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className="mb-4">
                        <Row>
                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faCreditCard} size='2x' color='#820AD1'/>
                            </Col>
                            <Col xs={10} className="h5 text-muted">Crédito Pessoal</Col>
                        </Row>

                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                        <Row>
                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faMobile} size='2x' color='#820AD1'/>
                            </Col>
                            <Col xs={10} className="h5 text-muted">APP</Col>
                        </Row>

                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                        <Row>
                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faShoppingCart} size='2x' color='#820AD1'/>
                            </Col>
                            <Col xs={10} className="h5 text-muted">Pagamentos Online</Col>
                        </Row>

                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                        <Row>
                            <Col xs={2} className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon icon={faWallet} size='2x' color='#820AD1'/>
                            </Col>
                            <Col xs={10} className="h5 text-muted">Pagamento Digital</Col>
                        </Row>

                    </Col>
                    
                </Row>
            </Col>
            <Col xs={12} lg={5}>
                <Image src={creditCard} alt='NuBank Credit Card Example' fluid />
            </Col>
        </Row>
    </Container>

);

export default CreditCard;