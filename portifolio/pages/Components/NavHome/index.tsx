import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function NavHome() {
  return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">William de Angelo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Sobre</Nav.Link>
        <Nav.Link href="#link">Contato</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  )
}