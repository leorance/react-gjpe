import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SIA GJPE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <NavDropdown title="Pelayanan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/kelas/a">Kelas A</NavDropdown.Item>
              <NavDropdown.Item href="/kelas/b">Kelas B</NavDropdown.Item>
              <NavDropdown.Item href="/kelas/c">Kelas C</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="http://localhost/generate">
                Generate Pelayanan
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/add-data">Add Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
