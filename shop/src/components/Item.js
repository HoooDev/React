import data from '../data.js'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap/';
// import { Link } from 'react-router-dom'

function Item() {
  let [shoes] = useState(data)
  return (
    <Row>
      {shoes.map((shoe, idx) => {
        let imgUrl = "https://codingapple1.github.io/shop/shoes" + (idx + 1) + ".jpg"
        return (
          <Col>
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