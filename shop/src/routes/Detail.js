import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"
import { useParams } from "react-router-dom"
import TabContent from "../components/TabContent"

 
function Detail(props) {


  let [onOff, setOnOff] = useState(false)
  useEffect(()=>{
    setTimeout(()=> { setOnOff(false) }, 2000 )
  }, [])

  let [inputValue, setInputValue] = useState('')
  useEffect(()=>{
    if(isNaN(inputValue) === true){
      alert('ㄴㄴ')
    }
  }, [inputValue])

  // let [count, setCount] = useState(0)
  let { id } = useParams()
  let targetItem = props.shoes.find((shoe) => id === String(shoe.id))
  let [tab, setTab] = useState(0)

  return (
    <>
      { onOff === true ? 
      <div className="alert alert-warning">
        2초 이내 구매시 할인
      </div> : null }
      {/* <button onClick={()=> {
        setCount(count+1 )
      }}>클릭!</button> <p>{count}</p> */}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes' + (Number(targetItem.id) + Number(1)) + '.jpg'} alt="123" width="100%" />
          </div>

          <div className="col-md-6">
          <input onChange={(e)=>{setInputValue(e.target.value)}}></input>
            <h4 className="pt-5">{targetItem.title}</h4>
            <p>{targetItem.content}</p>
            <p>{targetItem.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{
              let nowTab = tab
              nowTab = 0
              setTab(nowTab)
            }}>Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{
              let nowTab = tab
              nowTab = 1
              setTab(nowTab)
            }}>Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{
              let nowTab = tab
              nowTab = 2
              setTab(nowTab)
            }}>Option 3</Nav.Link>
          </Nav.Item>
        </Nav>

         <TabContent tab={tab} shoes={props.shoes}/>
      </div>
    </>
  )
}


export default Detail