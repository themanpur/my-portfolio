import {Container, Nav, Navbar, Badge} from 'react-bootstrap';

function Navigation(){
    return(
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#">
          <Badge className='bg-dark' >THEMAN</Badge> MOBALI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#apropos">Qui suis-je ?</Nav.Link>
            <Nav.Link href="#competence">Competences</Nav.Link>
            <Nav.Link href="#atouts">Atouts</Nav.Link>
            <Nav.Link href="#experiences">Experiences</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navigation;