import './App.css';
import Item from './components/Item'
import MyNavBar from './components/MyNavBar'
import Detail from './routes/Detail'
import Event from './routes/Event'
import Cart from './routes/Cart'
import { Container } from 'react-bootstrap/';
import { Routes, Route } from 'react-router-dom'
import data from './data'
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  // let obj = {name : 'lee'}
  // localStorage.setItem('data', JSON.stringify(obj))
  let [shoes, setShoes] = useState(data)
  let [clickCnt, setClickCnt] = useState(1)

  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]))
    }

  }, [])

  return (
    <div className="App">

      <MyNavBar></MyNavBar>
      <div className='main-bg'></div>
      {/* <button onClick={() => {
        console.log(shoes)
        let newShoes = [...shoes]
        newShoes = newShoes.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1)
        setShoes(newShoes)

      }}>정렬</button> */}
      <Routes>
        <Route path='/' element={
          <>
            <Container>
              <Item shoes={shoes} ></Item>
            </Container>
            {clickCnt < 3 ?
              <button onClick={() => {
                let newCnt = clickCnt
                newCnt += 1
                setClickCnt(newCnt)
                if (clickCnt === 1) {
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((data) => {
                      let copyItem = [...shoes, ...data.data]
                      setShoes(copyItem)
                    })
                } else if (clickCnt === 2) {
                  axios.get('https://codingapple1.github.io/shop/data3.json')
                    .then((data) => {
                      let copyItem = [...shoes, ...data.data]
                      setShoes(copyItem)
                    })
                }
              }}
              >더보기</button>
              : null}
          </>
        } />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='*' element={<div>없는 페이지</div>} />
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path='/cart' element={<Cart />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
