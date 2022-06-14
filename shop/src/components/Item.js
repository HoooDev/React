import { Col, Row } from 'react-bootstrap/';
// import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <Row>
      {props.shoes.map((shoe, idx) => {
        let imgUrl = "https://codingapple1.github.io/shop/shoes" + (idx + 1) + ".jpg"
        return (
          <Col key={idx}>
            <div>
              <img src={imgUrl} width='80%' alt='1' />
              <h4>{shoe.title}</h4>
              <p>{shoe.content}</p>
            </div>
          </Col>
        )
      })}
    </Row>

  )
}

export default Item