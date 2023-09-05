import { Container, Navbar, Nav } from "react-bootstrap";

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fs-1 logo" href="#home">W.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" id="navlink">Home</Nav.Link>
            <Nav.Link href="#link" id="navlink">New</Nav.Link>
            <Nav.Link href="#link" id="navlink">Popular</Nav.Link>
            <Nav.Link href="#link" id="navlink">Trending</Nav.Link>
            <Nav.Link href="#link" id="navlink">Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;