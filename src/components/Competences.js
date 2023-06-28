import {Container, Row, Col, Image, ProgressBar} from 'react-bootstrap';
import code from '../images/code.png';

function Competences () {
    return (
        <Container id='competence' className='my-5 bg-light' fluid>
            <Row>
                <h2 className='fw-bold'>Mes compétences</h2><br />
                <p>Developpement web et Mobile</p>
            </Row>
            <Row className='align-items-center'>
                <Col md={8} className='p-2'>
                    <Row className='align-items-center bg-white p-1 m-2'>
                        <Col xs={1} className='mr-2'><i className='bx bxl-html5 bx-md text-dark'></i></Col>
                        <Col xs={3} className='mr-2'><p className='fw-bold'>HTML5</p></Col>
                        <Col xs={8}><ProgressBar variant='dark' now={90}/></Col>
                    </Row>
                    <Row className='align-items-center bg-white p-1 m-2'>
                        <Col xs={1} className='mr-2'><i className='bx bxl-css3 bx-md text-dark'></i></Col>
                        <Col xs={3} className='mr-2'><p className='fw-bold'>CSS3</p></Col>
                        <Col xs={8}><ProgressBar variant='dark' now={70}/></Col>
                    </Row>
                    <Row className='align-items-center bg-white p-1 m-2'>
                        <Col xs={1} className='mr-2'><i className='bx bxl-bootstrap bx-md text-dark'></i></Col>
                        <Col xs={3} className='mr-2'><p className='fw-bold'>BOOTSTRAP</p></Col>
                        <Col xs={8}><ProgressBar variant='dark' now={60}/></Col>
                    </Row>
                    <Row className='align-items-center bg-white p-1 m-2'>
                        <Col xs={1} className='mr-2'><i className='bx bxl-react bx-md text-dark'></i></Col>
                        <Col xs={3} className='mr-2 '><p className='fw-bold'>REACT</p></Col>
                        <Col xs={8}><ProgressBar variant='dark' now={50}/></Col>
                    </Row>
                    <Row className='align-items-center bg-white p-1 m-2'>
                        <Col xs={1} className='mr-2'><i className='bx bxl-postgresql bx-md text-dark'></i></Col>
                        <Col xs={3} className='mr-2 '><p className='fw-bold'>SQL</p></Col>
                        <Col xs={8}><ProgressBar variant='dark' now={50}/></Col>
                    </Row>
                </Col>
                <Col md={4} className='p-5'>
                    <Image src={code} width={'100%'} rounded />
                </Col>
            </Row>
        </Container>
    );
}

export default Competences;