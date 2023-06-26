import {Container, Row, Col, Navbar, Badge} from 'react-bootstrap';

function Competences () {
    return (
        <Container id='competence' className='bg-light border-top border-dark' fluid>
            <Row className='p-5 align-items-center'>
                <Col xs={12} md={4}>
                    <Navbar.Brand href="#">
                        <Badge className='bg-dark' >THEMAN</Badge> MOBALI
                    </Navbar.Brand>
                </Col>
                <Col xs={12} md={4}>
                    Tous droits reserves
                </Col>
                <Col xs={12} md={4}>
                    <Row className='p-2 align-items-center d-inline'>
                            <a href="https://www.linkedin.com/in/gervais-jeudong">
                            <i className='bx bxl-linkedin bx-sm text-primary'></i>
                            </a>
                            <a href="https://twitter.com/themobali?t=2joQH06Bsv9gGaxtlUntAQ&s=09">
                            <i className='bx bxl-twitter bx-sm text-primary'></i>
                            </a>
                            <a href="http://wa.me/655734950">
                            <i className='bx bxl-whatsapp bx-sm text-success'></i>
                            </a>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Competences;