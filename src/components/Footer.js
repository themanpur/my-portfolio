import {Container, Row, Col, Nav, Navbar, Badge} from 'react-bootstrap';

function Competences () {
    return (
        <Container id='competence' className='bg-light border-top border-dark' fluid>
            <Row className='md-p-3 align-items-center'>
                <Col md={2}>
                    <Navbar.Brand href="#">
                        <Badge className='bg-dark' >THEMAN</Badge> MOBALI
                    </Navbar.Brand>
                </Col>
                <Col md={8}>
                    Tous droits reserves
                </Col>
                <Col md={2}>
                    <Nav>
                        <Nav.Link href="https://www.linkedin.com/in/gervais-jeudong">
                        <i className='bx bxl-linkedin bx-sm text-primary'></i>
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/themobali?t=2joQH06Bsv9gGaxtlUntAQ&s=09">
                        <i className='bx bxl-twitter bx-sm text-primary'></i>
                        </Nav.Link>
                        <Nav.Link href="http://wa.me/655734950">
                        <i className='bx bxl-whatsapp bx-sm text-success'></i>
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Competences;