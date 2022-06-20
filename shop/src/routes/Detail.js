import { useParams } from "react-router-dom"
import styled from "styled-components"

function Detail(props) {

  let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
  `

  let Box = styled.div`
    background : gray;
    padding : 20px
  `

  let { id } = useParams()
  let targetItem = props.shoes.find((shoe) => id === String(shoe.id))

  return (
    <>
      <div className="container">

        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes' + (Number(targetItem.id) + Number(1)) + '.jpg'} alt="123" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{targetItem.title}</h4>
            <p>{targetItem.content}</p>
            <p>{targetItem.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail