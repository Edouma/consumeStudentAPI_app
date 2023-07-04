import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Student App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <NavDropdown title="Student" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/addStudent">Add Student</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/allStudents"> All Students </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>
    </Router>
     );
}
 
export default NavigationBar;