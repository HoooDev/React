import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap/';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container className='nav justify-content-start'>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>

      <Container>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='80%' alt='1' />
            <h4>상품명</h4>
            <p>상품내용</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width='80%' alt='2' />
            <h4>상품명</h4>
            <p>상품내용</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width='80%' alt='2' />
            <h4>상품명</h4>
            <p>상품내용</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
