// ...title이 아닌 그냥 title을 적으면 바로 반영이 안됨.
          // state 변경 함수의 특징 : 기존 state를 갈아치워줌 (등호 비교해서 같으면 변경을 안해줌)
          // arr/object 특징 : 할당 -> 어디에 있는지 화살표만 저장되는 느낌(변수는 램에 저장 됨)
          //                   화살표가 가리키는 곳이 위치가 바뀌지 않으면 state는 바뀐 값이라고 생각하지 않음. (원본에 저장된 객체만 변경됨)
          //                   그러므로 ...(괄호 벗기는 느낌) 을 사용하여 객체를 복사 후 위치를 바꿔주면 state가 위치 바뀜을 인지하고 바꿔줌. (reference data type)

import { useState } from 'react';
import './App.css';

function App() {

  let [titles, setTitles] = useState([])
  let [like, setLike] = useState([])
  let [hate, setHate] = useState([])

  let [modal, setModal] = useState(false)
  let [titleIndex, setTitleIndex] = useState(0)
  let today = new Date();   
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
// let [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>
      <h3>글작성</h3>
      <input onKeyPress={(event) => {
        if (event.key === 'Enter') {
          setTitles([event.target.value, ...titles])
          setLike([0, ...like])
          setHate([0, ...hate])

          event.target.value = ''
      }
        }}></input>
      {
        titles.map(function (title, idx) {
          return (
          <div className='list' key={idx}>
            <h4 onClick={()=> {
              setModal(modal = ! modal)
              setTitleIndex(titleIndex = idx)
            }
            }>{ titles[idx] }</h4>
            <span style={{cursor : 'pointer'}} onClick={ () => { 
              let newLike = [...like]
              newLike[idx] += 1
              setLike(newLike) 
              } } >👍</span> {like[idx]}
              &nbsp;&nbsp;
            <span style={{cursor : 'pointer'}} onClick={ () => { 
              let newHate = [...hate]
              newHate[idx] += 1
              setHate(newHate) 
              } } >👎</span> {hate[idx]} &nbsp;&nbsp;
              <span>👉{like[idx]-hate[idx]}</span>
            <p>{year}년 {month}월 {date}일 작성</p>
            <button onClick={() => {
              // let deleteTitles = [...titles]
              // deleteTitles.splice(idx, 1)
              // setTitles(deleteTitles)
              let deleteTitles = titles.filter(delTitle => delTitle !== titles[idx])
              console.log(deleteTitles, idx)
              setTitles(deleteTitles)
            }}>삭제</button>
          </div>
          )
        })
      }

      {
        // if를 {} 안에 쓸 수 없다. -> 삼항연산자 사용
        // for를 {} 안에 쓸 수 없다. -> map함수 사용
         modal === true ? <Modal titleIndex={titleIndex} titles={titles}/> : null
      }

    </div>
  );
}


// [동적인 UI만드는 step]
// 1. html css로 미리 디자인완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성 

function Modal(props) {
    return (
    <div className='modal'>
      {console.log(props)}
      <h4>{props.titles[props.titleIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
