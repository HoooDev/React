import { Col, Row } from 'react-bootstrap/';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Item(props) {

  let navigate = useNavigate()
  return (
    <Row>
      {props.shoes.map((shoe, idx) => {
        let imgUrl = "https://codingapple1.github.io/shop/shoes" + (shoe.id + 1) + ".jpg"
        let goDetail = '/detail/' + shoe.id
        return (
          <Col xs={6} md={4} key={idx}>
            <div>
              <img onClick={() => { navigate(goDetail) }} src={imgUrl} width='80%' alt='1' style={{ cursor: 'pointer' }} />
              <h4>{shoe.title}</h4>
              <p>{shoe.price}</p>
            </div>
          </Col>
        )
      })}
    </Row>

  )
}

export default Item