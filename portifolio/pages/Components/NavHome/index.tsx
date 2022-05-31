import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function NavHome() {
  return (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">William de Angelo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    </Navbar.Collapse>
  </Container>
  </Navbar>
  )
}