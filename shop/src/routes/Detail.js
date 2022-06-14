import { useParams } from "react-router-dom"

function Detail(props) {

  let {id} = useParams()
  console.log(props.shoes)
  let findIdx = props.shoes.filter((shoe) => console.log(shoe.id) )
  console.log(findIdx)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src= {'https://codingapple1.github.io/shop/shoes' + (parseInt(props.shoes[id]['id']) + parseInt(1)) + '.jpg'} alt="123" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{findIdx.title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail