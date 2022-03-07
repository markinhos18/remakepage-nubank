import React from "react";
import { Container, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.svg";
import './Footer.scss';

const Footer = () => (
    <footer className="footer py-3">
        <Container fluid className="px-5">
            <Row>
                <Col  className="d-flex align-items-center justify-items-center">
                    <Image src={Logo} width="60"  alt="NuBank logo" />
                </Col>
                <Col className="d-flex align-items-center justify-items-center text-center">
                    <p>© 2021  Nu Pagamentos S.A - Instituição de Pagamento.  18.236.120/0001-58<br /> Rua Capote Valente, 39 - São Paulo, SP - 05409-000</p>
                </Col>
                <Col>
                    <div class="d-flex justify-content-end align-items-center">
                        <a class="align-self-center col-1" aria-label="Navegar para o nosso perfil no Facebook" href="https://www.facebook.com/nubank" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faFacebook}  size="2x" color="white"/>
                        </a>
                        
                        <a class="align-self-center col-1" aria-label="Navegar para o nosso perfil no Instagram" href="https://www.instagram.com/nubank/" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faInstagram}  size="2x" color="white"/>
                            
                        </a>

                        <a class="align-self-center col-1" aria-label="Navegar para o nosso perfil no LinkedIn" href="https://www.linkedin.com/company/nubank" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faLinkedin}  size="2x" color="white"/>
                           
                        </a>

                        <a class="align-self-center col-1" aria-label="Navegar para o nosso canal no Youtube" href="https://www.youtube.com/nubank" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faYoutube}  size="2x" color="white"/>
                            
                        </a>

                        <a class="align-self-center col-1" aria-label="Navegar para o nosso perfil no Twitter" href="https://twitter.com/nubank" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faTwitter}  size="2x" color="white"/> 
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;