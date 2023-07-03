import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import me from '../images/moi.png'

function Apropos () {
    return (
        <Container id='apropos' className='my-5' fluid>
            <Row className='align-items-center'>
                <Col md={6} className='p-2 align-items-center'>
                    <h1 className='fw-bold fs-1 font-monospace'>JEUDONG DZOMO Gervais</h1><br />
                    <h2 className='fw-bold fs-4'>Ingenieur des Travaux en Informatique et Telecoms</h2><br />
                    <h3 className='fw-light fs-3'>BIENVENUE</h3><br />
                    <Button href="#competence" variant='dark' as='a'>+5 Experiences</Button>
                </Col>
                <Col md={6} className='p-5'>
                    <Image src={me} width={'90%'} height={'80%'} rounded />
                </Col>
            </Row>
        </Container>
    );
}

export default Apropos;