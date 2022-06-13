import './App.css';
import Item from './components/Item'
import MyNavBar from './components/MyNavBar'
import Detail from './routes/Detail'
import { Container } from 'react-bootstrap/';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <MyNavBar></MyNavBar>
      <div className='main-bg'></div>

      <Routes>
        <Route path='/' element={
          <>
            <Container>
              <Item></Item>
            </Container>
          </>
        } />

        <Route path='/detail' element={<Detail />} />
      </Routes>



    </div>
  );
}

export default App;
