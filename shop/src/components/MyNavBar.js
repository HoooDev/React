import { Container, Nav, Navbar } from 'react-bootstrap/';
import { Link } from 'react-router-dom'


function MyNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className='nav justify-content-start'>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" style={{ textDecoration: "none" }}><Nav.Link href="#home">Home</Nav.Link></Link>
          <Nav.Link href="#features">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavBar