import { Container, Nav, Navbar } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom'


function MyNavBar() {
  let navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
      <Container className='nav justify-content-start'>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail') }} >Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavBar