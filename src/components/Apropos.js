import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import me from '../images/moi.png'

function Apropos () {
    return (
        <Container id='apropos' className='md-my-5' fluid>
            <Row className='align-items-center'>
                <Col md={6} className='p-5 align-items-center'>
                    <h1 className='fw-bold'>JEUDONG DZOMO Gervais</h1><br />
                    <h2 className='fw-bold'>Ingenieur des Travaux en Informatique et Telecoms</h2><br />
                    <h3 className='fw-light'>BIENVENUE</h3><br />
                    <Button href="#competence" variant='dark' as='a'>Mon Experience</Button>
                </Col>
                <Col md={6} className='p-5'>
                    <Image src={me} width={'100%'} rounded />
                </Col>
            </Row>
        </Container>
    );
}

export default Apropos;