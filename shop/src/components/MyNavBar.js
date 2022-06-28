import axios from 'axios';
import { Container, Nav, Navbar } from 'react-bootstrap/';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom'


function MyNavBar() {
  let navigate = useNavigate()

  let result = useQuery('getData', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data
    })
  })

  return (
    <Navbar bg="dark" variant="dark">
      <Container className='nav justify-content-start'>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={() => { navigate('/cart') }} >Cart</Nav.Link>
        </Nav>
        <Nav className='ms-auto' style={{ color: 'white' }}>
          {/* { result.isLoading ? '로딩중' : '반가워요 ' + result.data.name } */}
          {result.isLoading && '로딩중'}
          {result.error && 'Error!'}
          {result.data && result.data.name}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavBar