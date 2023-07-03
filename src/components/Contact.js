import {Container, Row, Col, Button, Image, Form} from 'react-bootstrap';
import coffee from '../images/grab-a-coffee.png'

function Apropos () {
    return (
        <Container id='contacts' className='my-5' fluid>
            <Row>
                <h2 className='fw-bold'>Besoin d'un service ?</h2><br />
                <p>Prenons un rendez-vous</p>
            </Row>
            <Row className='align-items-center'>
                <Col md={5} className='p-5'>
                    <Image src={coffee} width={'100%'} rounded />
                </Col>
                <Col md={7} className='p-3 align-items-center'>
                    <Row className='text-start m-3'>
                        <Col md={6}>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type='text' id='name'></Form.Control>
                        </Col>
                        <Col md={6}>
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control type='text' id='firstname'></Form.Control>
                        </Col>
                    </Row>
                    <Row className='text-start m-3'>
                        <Form.Label>Adresse Email</Form.Label>
                        <Form.Control type='email' id='email'></Form.Control>
                    </Row>
                    <Row className='text-start m-3'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' rows={4} id='message'></Form.Control>
                    </Row>
                    <Row className='m-3'><Button type='submit' variant='dark' as='a'>Envoyer</Button></Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Apropos;