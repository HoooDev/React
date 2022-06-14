import './App.css';
import Item from './components/Item'
import MyNavBar from './components/MyNavBar'
import Detail from './routes/Detail'
import Event from './routes/Event'
import { Container } from 'react-bootstrap/';
import { Routes, Route } from 'react-router-dom'
import data from './data'
import { useState } from 'react';
function App() {
  
  let [shoes] = useState(data)
  return (
    <div className="App">

      <MyNavBar></MyNavBar>
      <div className='main-bg'></div>

      <Routes>
        <Route path='/' element={
          <>
            <Container>
              <Item shoes={shoes} ></Item>
            </Container>
          </>
        } />
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
        <Route path='*' element={<div>없는 페이지</div>} />

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

      </Routes>



    </div>
  );
}

export default App;
