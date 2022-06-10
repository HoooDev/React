# React

------

1. 시작하기

   1. Node.js 설치

   2. React 프로젝트 생성

      - `npx create-react-app {project name}`

      - `npm start` -> run server

        

2. React 프로젝트의 기본 구조

   ```
   /test
   ├── README.md
   ├── node_modules [폴더]
   ├── package-lock.json
   ├── package.json
   ├── public [폴더]
   └── src [폴더]
   ```

   - `node_modules `: `npm`으로 설치한 패키지와 기본적으로 설치된 패키지가 존재,

   - `package-lock.json`, `package.json` : `npm`으로 설치한 패키지의 정보가 작성 된 파일.

   - `public` : 리액트는 *가상 DOM을 사용한다. 이때 필요한 html 파일 등 이 들어간 폴더

     - *가상 DOM : 바뀐 부분을 가상 DOM끼리 계속하여 비교 하여 DOM 업데이트가 이뤄지므로 성능적으로 큰 차이가 있음 (즉, 성능 향상)

   - `src` : 실제 개발 시 작성한 코드가 저장되는 위치

     

3. React 문법 정리

   - React는 HTML이 아닌 JSX문법을 사용함.

   - class 🙅 -> className 🙆

     ```react
     function App(){
       return (
         <div className="App">
           <div className="title">
             <div>React 공부</div>
           </div>
         </div>
       )
     }

   - state : 일반 변수와 달리 **"값이 변경되면 자동으로 변경 된 데이터가 설정 된 HTML을 렌더링 해줌"** -> 즉, 새로고침 없이 자동 렌더링 됨.

   - state 생성 : `useState` 함수를 사용하여 state를 생성.

     - state의 인자 -> `let [title, setTitle]=useState('초기 제목 값') `

     - `title` -> 실제 저장 할 데이터

     - `setTitle` -> 해당 데이터를 변경시킬 수 있는 함수

     - state의 값은 직접 변경이 **불가능** 반드시 변경을 시킬 수 있는 함수를 사용하여 데이터를 변경.

       

   - state 수정 (1) : 수정 함수를 사용

     ```react
     import { useState } from 'react';
     import './App.css';
     
     function App() {
       
       let [title, setTitle] = useState('초기 제목 값')
       
       return (
         <div className="App">
           <div className="title">
             <div>{ title }</div>
             <button onClick={()=>{setTitle('클릭 후 변경되는 제목 값')}}>제목 변경 버튼</button>
           </div>
         </div>
       );
     }
     ```

     - `onClick` : 클릭 시 일어나는 이벤트

     - `()=>{}` : 콜백 함수 (ES6 문법)

       - 주의 : onClick={()=>{ changeTitle }  , ~~onClick={()=>{ changeTitle() }~~

     - `setTitle('클릭 후 변경되는 제목 값')` : state 선언 시 같이 선언 된 **변경함수를 사용하여 데이터 변경**

       - 주의 : 기존 state의 변수명 사용 X (변경함수의 인자로 작성된 데이터로 완전히 대체되기 때문)

         

   - state 수정 (2) : 만약 배열이 state에 설정 돼 있다면?

     ```react
     import { useState } from 'react';
     
     ...
     
     let [list, setlist] = useState(['목록1', '목록2', '목록3'])
     
     ...
     
     onClick={ ()=>{ setlist(['변경 목록1', '목록2', '목록3']) } }
     ```

     위 방식과 같이 state에 설정될 데이터를 직접 넣어줘야 한다.

     ```react
     import { useState } from 'react';
     
     function App() {
     
     function ChangeTitle() {
       var newArray = [...list];
       newArray[0] = '변경 목록1';
       setList( newArray );
     }
     
     let [title, setList] = useState(['목록1', '목록2', '목록3'])
     
     ...
     
     return (
         <div className="App">
           <div className="title">
             <div>{ list }</div>
             <button onClick={ ChangeTitle }>제목 변경 버튼</button>
           </div>
         </div>
       );
     
     ...
     
     }
     ```

     직접 설정이 번거롭다면 함수로서의 표현도 가능.

     

   - react의 조건문 

     - 직접적인 if - else 구문을 사용할 수 없고, *삼항연산자 사용.
       - 삼항연산자 : `조건문 ? 참 일때 실행 : 거짓일때 실행`
     - 아무것도 실행하고 싶지 않다면 `null`

     ```react
     import { useState } from 'react';
     
     function App() {
     
     ...
     
     let [flag, setflag] = useState(false)
     
       return (
         <div className="App">
           <div className="title">
             <button onClick={ ()=>{ setflag(!flag) } }>컴포넌트 스위치</button>
           </div>
     
           {
             flag ? <SubPage></SubPage> : null
           }
     
         </div>
       );
     }
     
     function SubPage() {
       return (
         <>
           <div>
             This is Sub Page!
           </div>
           <div>
             HELLO WORLD!
           </div>
         </>
       )
     }
     ```

     

   - react의 반복문 : map 함수 사용 (직접적인 for 사용 불가)

     ```react
     import { useState } from 'react';
     
     ...
     
     function App() {
       
       let [title_list, settitle] = useState(['제목1','제목2','제목3'])
     
       return (
         <div className="App">
     
           {
             title_list.map(function(e){
               return(
                 <div className="title">
                   TITLE : { e } / DETAIL : 내용
                 </div>
               )
             })
           }
     
         </div>
       );
     }
     
     ...
     ```

     - map

       - `배열.map((요소, 인덱스, 배열) => { return 요소 });`
       - 첫번째 인자 : 각 배열의 아이템의 데이터를 저장
       - 두번째 인자 : 각 배열의 인덱스
       - 세번째 인자 : 해당 배열 값

     - 정적인 문자열에 동적인 변수 설정 (파이썬의 f-string ? )

       ```react
       /* 만약 props로 넘어온 index 값의 연산이 필요하다면 아래와 같이 연산하여 사용 */
       /* https://mysite.com/img/example1.jpg */
       /* https://mysite.com/img/example2.jpg */
       ...
       <img src={ 'https://mysite.com/img/example'+ (props.index + 1) +'.jpg' } width="100%" />
       ```

     - 함수를 통한 반복문

       ```react
       import { useState } from 'react';
       
       ...
       
       function App() {
         
         let [title_list, settitle] = useState(['제목1','제목2','제목3'])
       
         function UI() {
       
           var ui_array = [];
       
           for(let i=0; i<3; i++){
       
             ui_array.push(
               <div className="title">
                 TITLE : { title_list[i] } / DETAIL : 내용
               </div>
             )
       
           }
       
           return ui_array
       
         }
       
         return (
           <div className="App">
             { UI() }
           </div>
         );
       }
       
       ...
       ```

   - props

     - 자식 컴포넌트에서 부모 컴포넌트의 값이 필요 할 때 props를 사용하여 값을 전달/사용.

       ```react
       import { useState } from 'react';
       
       ...
       
       function App() {
         
         let [title_list, settitle] = useState(['제목1','제목2','제목3'])
         let [clickidx, setidx] = useState(0)
       
         function UI() {
       
           var ui_array = [];
       
           for(let i=0; i<3; i++){
       
             ui_array.push(
       
               // 제목 클릭 시 clickidx값 설정
               <div className="title" onClick={ ()=>{ setidx(i) } }>
                 TITLE : { title_list[i] } / DETAIL : 내용
               </div>
             )
       
           }
       
           return ui_array
       
         }
       
         return (
           <div>
             <div className="App">
               { UI() }
             </div>
             <Sub title_list={title_list} clickidx={clickidx}/>
           </div>
         );
       }
       
       function Sub(props) {
         return (
           <div className="Sub">
             <div>
               <h2>내가 클릭한 제목 : { props.title_list[props.clickidx] }</h2>
             </div>
           </div>
         )
       }
       
       ...
       