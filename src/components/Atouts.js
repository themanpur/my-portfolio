import {Container, Row, Col, Image, ProgressBar} from 'react-bootstrap';
import code from '../images/aptitudenb.png';

function Atouts () {
    return (
        <Container id='atouts' className='my-5' fluid>
            <Row>
                <h2 className='fw-bold'>Mes atouts</h2><br />
                <p>Mes aptitudes en dehors de ma formation professionnelle</p>
            </Row>
            <Row className='align-items-center'>
                <Col md={6} className='p-2'>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Gérer un agenda et un budget.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Transmettre l’information à une équipe, des clients, et
des entreprises.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Connaissance des systèmes informatiques.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Connaissance des langages de programmation.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Savoir diriger un équipe de professionnels.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Sens de la communication.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Leadership.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Capacité d’adaptation.</p>
                    </Row>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <p className='fw-bold text-md-start fs-4 font-monospace'>Autonmie.</p>
                    </Row>
                </Col>
                <Col md={6} className='p-5'>
                    <Image src={code} width={'100%'} rounded />
                </Col>
            </Row>

            <Row className='align-items-center'>
                <h2 className='fw-bold'>Langue</h2><br />
                <Col md={6} className='p-2'>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <Col xs={1}><i className='bx bxl-french bx-md text-dark'></i></Col>
                        <Col xs={3} className='mr-2 '><p className='fw-bold'>FRANCAIS</p></Col>
                        <Col xs={8}><ProgressBar variant='dark' now={80}/></Col>
                    </Row>
                </Col>
                <Col md={6} className='p-2'>
                    <Row className='align-items-center bg-light p-1 m-2'>
                        <Col xs={1}><i className='bx bxl-english bx-md text-dark'></i></Col>
                        <Col xs={3} className='mr-2 '><p className='fw-bold'>ANGLAIS</p></Col>
                        <Col xs={8}><ProgressBar variant='dark' now={50}/></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Atouts;