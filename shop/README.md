# React 쇼핑몰 프로젝트

### 1. 목표

- React를 배우기 위한 2번째 step.
- React-Bootstrap을 활용하여 유용하고 간단한 UI로 진행.
- Redux Toolkit을 사용하여 store를 통한 state 관리



### 2. About Project

- **Navbar**

  ```html
  <Navbar bg="dark" variant="dark">
      <Container className='nav justify-content-start'>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
      </Container>
  </Navbar>
  ```

- **export와 import**

  - 현재 파일이 아닌 다른 파일에서 해당되는 변수를 복사하여 사용하고 싶다면?
    - **export default 변수** (보내는 파일에서) -> **import 변수 from '경로'** (받는 파일로)
  - 만약 2개 이상의 변수를 보내고 싶다면?
    - **export {변수1, 변수2, ...}** (보내는 파일에서) -> **import {변수1, 변수2, ... }  from '경로'**(받는 파일로)

- **Component로 나누고 반복하기**

  - Components폴더를 만든 후 Item.js파일을 map을 통한 반복으로 구조를 간략화 시킨다.
  - Navbar 또한 Component화 시켜 간략화.
    - Component 이름을 Navbar로 만들어서 bootstrap과의 충돌이 생김. (이름 변경으로 해결)

- **React router**

  1. `npm install react-router-dom@6` 을 사용하여 react router 6버전 설치

  2. index.js 파일에서  `import { BrowserRouter } from 'react-router-dom'`로 BrouserRouter를 import 해준 후 <App/> 태그를 <BrowserRouter> 태그로 감싸준다.

  3. App.js 파일에서 `import { Routes, Route, Link } from 'react-router-dom'` 을 사용하여

     ```html
     <Routes>
         <Route path='/'/>
         <Route>
     </Routes>
     ```

     와 같이 감싸준다.

     * path : 이동 할 URL주소 (기본주소 뒤에 붙여 사용 됨.)

  4. Link 태그를 통해 Route주소로 이동 할 버튼을 만들어준다. 

     ```html
     <Link to="/" style={{ textDecoration: "none" }}>
         <Nav.Link href="#home">Home</Nav.Link>
     </Link>
     ```

     - to : path가 / 인 태그와의 연동

- **useNavigate**

  - 페이지 이동을 도와주는 함수
  - 보통은 `let navigate = useNavigate()` 와 같은 방식으로 변수에 담아서 사용
  - `onClick={()=>{ navigate('경로')} }` 방식으로 사용.
  - `navigate(1)`  → 앞으로 한 페이지(앞으로 가기), `navigate(-1)` → 뒤로 한 페이지(뒤로 가기)

- **404 페이지**

  - `<Route path='*' element={<div>없는 페이지</div>} />`

- **Nested Routes**

  - 예시로 /about이 회사의 정보, /about/member이 회사의 직원 정보라면

    ```html
    <Route path='/About' element={<About/>}>
    <Route path='member' element={ <div> 직원 </div> }></Route>
      <Route path='location' element={<About/>}></Route>
    </Route>
    ```

    위와 같은 방식으로 Route 태그로 감싸준 후 path경로에 **/ 를 생략**하여 작성

  - 둘러싸인 태그와 함께 모든 elements들이 보임 (위 같은 경우는 About컴포넌츠와 직원 이라는 글자가 동시에 보이게 됨. )

  - 최상위 `<Route/>` 태그의 element 요소 component에 가서 `<Outlet>` 태그를 사용하여 하위 태그의 위치를 지정 해줄 수 있음

    ```jsx
    // About.js
    import { Outlet } from 'react-router-dom'
    
    function About() {
    	return(
    		<>
    			<h4>회사 정보</h4>
    			<Outlet></Outlet>
    		</>
    	)
    }
    
    export default About
    ```

  - 여러 유사한 페이지가 필요 할 때 사용하면 좋다.

- **find 함수**

  - find 함수란?

    - 배열의 요소를 순차적으로 순회하면서 조건에 일치하는 요소의 값을 즉시 반환.
    - 조건에 일치하지 않는다면, undefined를 반환한다.

  - 보유한 데이터의 순서가 바뀌더라도 지정된 id 값의 Router를 비추고 싶을 때.

    ```json
      let data = [
        {
          id: 0,
          title: "White and Black",
          content: "Born in France",
          price: 120000
        },
        ...생략
        ]  
    ```

    데이터의 모양이 이렇다면 

    ```js
    let targetItem = props.shoes.find((shoe) => id === String(shoe.id) )
    ```

    지정된 id 값을 변수에 find 함수로 찾아서 저장을 한다.

- **css파일 종속시키기**

  - ```js
    |   App.js
    |   App.module.css
    ```

    위와 같이 작성하게 된다면 css파일은 App.js에 종족되게 된다.

- **styled-components**

  - `npm install styled-components`

  - 사용하고자 하는 페이지에 `import styled from "styled-components"` 후

    ```js
      let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
      `
    ```

    위와 같이 변수에 담아 두면 components로써 사용이 가능하다.

  - 장점

    1. css 파일을 열지 않아도 된다.

    2. 스타일이 다른 js파일로 오염되지 않는다. (해당 페이지 안에서만 적용)
    3. 페이지 로딩시간 단축

  - 단점

    1. js파일이 복잡해진다
    2. 중복스타일은 컴포넌트간 import를 해야하는데 css와 크게 다를게 없다.
    3. 협업시 css담당과의 마찰이 있을 수 있다. (숙련도 이슈) 

  - 재활용을 하려면?

    ```js
      let YellowBtn = styled.button`
        background : ${ props => props.bg };
        color : black;
        padding : 10px;
      `
    ```

    props를 활용하여 

    `<YellowBtn bg="blue"/>` 와 같이 사용하면 된다.

  - 재활용 + 간단한 프로그래밍을 통한 조건문

    ```js
      let YellowBtn = styled.button`
        background : ${ props => props.bg };
        color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
        padding : 10px;
      `
    ```

  - styled 복사

    `let newBtn = styled.button(복사 할 component)`

- **Component의 LifeCycle(useEffect)**

  - LifeCycle

    - mount : 페이지에 장착
    - update : 업데이트
    - unmount : 제거

  - 사용 이유

    - 간섭이 가능하다 (중간중간 코드 실행)
    - useEffect 안에 있는 코드는 html 렌더링 후에 동작
      - 복잡한 연산의 경우 useEffect안에 코드를 넣게 된다면 화면을 먼저 띄운 후 연산이 실행되므로 좀 더 빠른 효율

  - 사용 방법

    - mount, update : `useEffect(()=>{ 페이지 장착 시 실행 될 코드 }, [ 실행조건 ])` 

      - useEffect 동작 전에 실행되는 `return() => {}`

        ```js
        // clean up function
        useEffect(()=>{ 페이지 장착 시 실행 될 코드 
                      	return() => {
                          [코드~~]
                        }
                      }, [])
        ```

    - 간단 정리

      - `useEffect(()=>{})` -> 재렌더링마다 코드 실행하고 싶으면
      - `useEffect(()=>{}, [])` -> mount시 1회 코드 실행하고 싶으면
      - `useEffect(()=>{ return{} }, [ 실행조건 ])` -> unmount시 1회 코드 실행하고 싶으면

- **AJAX를 통한 서버와의 통신**

  - GET -> 데이터를 서버로부터 가져온다.

  - POST -> 데이터를 서버로 보낸다.

  - form태그를 사용하여  get, post로 요청을 날린다면 **브라우저가 새로고침** 된다.

  - 이런 부분을 해소하고자 **AJAX** 사용!

    - 서버에 GET, POST 요청을 할 때 새로고침 없이 데이터를 주고 받을 수 있게 도와주는 간단한 브라우저 기능
    - 방법
      - XMLHttpRequest (옛날 문법)
      - fetch() (최신 문법)
      - **axios** (외부 라이브러리) <-- 이번 프로젝트에선 이 방법 채택

  - axios 사용법

    - `npm install axios`

    - ```js
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
              console.log(결과.data)
            })
            .catch(()=>{
              console.log('실패함')
            })
          }}>버튼</button>
      ```

    - get을 사용하여 URL로 요청을 보내고 .then 안의 '결과' 에 요청이 담기게 되고 '결과.data' 에 우리가 가져오고자 하는 데이터가 가져와짐

    - 만약 요청을 보냈는데 data를 가져오는데 실패하게 된다면 .catch() 안의 코드가 실행된다.

    - axios로 추가 데이터 불러와서 렌더링하기

      ```js
      axios.get('https://codingapple1.github.io/shop/data2.json')
      	.then((data) => {
      	let copyItem = [...shoes]
      	data.data.map((newItem) => copyItem.push(newItem))
      	setShoes(copyItem)
      	})
      ```

      새로운 복사본을 만들어 shoes에 map을 통한 순회로 데이터를 집어 넣어줌.

      ```js
      axios.get('https://codingapple1.github.io/shop/data2.json')
      	.then((data) => {
      	let copyItem = [...shoes, ...data.data]
      	setShoes(copyItem)
      	})
      ```

      다른 방법.

      더 효율적인 방법인데 구조분해할당(...) 이 생각나지 않아 좀 더 어렵게 접근했었다.

    - POST 요청 하는 법

      - `axios.post('URL', {name : 'kim'})` 와 같은 코드로 전송.
      - 뒤에 .then() 을 붙인다면 완료시 특정 코드 실행 가능
      
    - 동시에 AJAX요청 여러개 날리는 법

      - `Promise.all( [axios.get('URL1'), axios.get('URL2')] )` 
      - 마찬가지로 뒤에 .then() 을 붙인다면 완료시 특정 코드 실행 가능

    - fetch() 사용법

      - `fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) } )`
      - fetch는 자동으로 JSON -> object/array 로 변경해주지 않으므로 직접 바꾸는 작업이 필요.

- **탭 UI 만들기**

  - TabContent.js Component를 새로 만들고 코드 작성 (html 안에서 기존 if 문법을 사용 불가하므로 Component화 시켜서 사용)

  ```js
  // TabContent.js
  function TabContent (props) {
  		if (props.tab === 0){
  			return <div>내용1</div>
  		} else if(props.tab === 1){
  			return <div>내용2</div>
  		} else {
  			return <div>내용3</div>
  		}
  }
  
  export default TabContent
  ```

  

  - 다른 방법 (list의 index의 조작으로도 충분히 사용 가능)

  ```js
  return (
    [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]
    )
  ```

  

  - Detail.js에 컴포넌트를 붙인 후 State 조작해줌 (각 tab에 onClick 함수를 사용하여 tab의 번호를 저장해 줄 state를 조작해준다.)

  ```js
  ...중략
  import TabContent from "../components/TabContent"
  	
    ...중략
    let [tab, setTab] = useState(0)
  
    return (
      		... 중략
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
  
           <TabContent tab={tab}/>
        </div>
      </>
    )
  }
  
  export default Detail
  ```

- **Redux**

  - `npm install @reduxjs/toolkit react-redux` 를 사용해 설치 (React 18.1.0 이상 버전에서 사용)

  - src 폴더 안에 store.js 파일 생성 후 코드 작성

    ```js
    // store.js
    import { configureStore } from '@reduxjs/toolkit'
    
    export default configureStore({
      reducer: { }
    }) 
    ```

  - index.js 에서 사용 선언 해주기

    ```js
    ...중략
    import { Provider } from 'react-redux';
    import store from './store.js' // store.js import 하기
    
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>  
      </React.StrictMode>
    );
    ...중략
    ```

    1. `<Provider></Provider>`태그로 `<App/>` 태그를 감싸준다.
    2. store.js 를 import 후  `<Provider store={store}>` 를 통해 가져오기

  - store.js 에서 state만드는 방법

    ```js
    import { configureStore, createSlice,  } from '@reduxjs/toolkit'
    
    //useState와 비슷한 원리
    let user = createSlice({
    	name : 'user', // state 이름
    	initialState : 'lee' // 값
    })
    
    
    export default configureStore({
      reducer: {
    		user : user.reducer // 위 변수를 정해진 규격에 맞게 넣어줌. 
    	}
    })
    ```

  - 다른 component에서 사용하기

    - 만약 Cart.js에서 사용한다면

      ```js
      import {Table} from 'react-bootstrap'
      import { useSelector } from 'react-redux'
      
      function Cart() {
      
      	let a = useSelector((state)=> { return state }) // Redux store를 가져와 줌, 모든 state가 이 곳에 남아있다.
      
      	return(
      		<div>
      			...중략
      		</div>
      	)
      }
      
      export default Cart
      ```

      위와 같이 작성하면 모든 state들이 변수 a에 저장되게 되는데 만약 user라는 state만 가져오고 싶다면 `let a = useSelector((state)=> { return state.user })`와 같이 조작 해 주면 된다.
    
  - state를 수정하려면?
  
    ```js
    //store.js
    import { configureStore, createSlice, } from '@reduxjs/toolkit'
    
    //useState와 비슷한 원리
    let user = createSlice({
    	name: 'user',
    	initialState: { name: 'Lee', age: 26 },
    	reducers: {
    		changeName(state) {
    			state.name = 'LeeGunHoo'
    		},
    		plusAge(state) {
    			state.age += 1
    		}
    	}
    })
    
    // 함수들을 빼내는 작업 (reducers 안의 내용)
    export let { changeName, plusAge } = user.actions
    
    중략..
    ---------------------------------------------------------
        
    // Cart.js
    import { useDispatch, useSelector } from 'react-redux'
    import { changeName, plusAge } from '../store.js'
    
    function Cart() {
        중략 ...
    	let dispatch = useDispatch() // dispatch 사용
    	return (
    		<div>
            	<td><button onClick={() => 
        {
            dispatch(changeName()) // dispatch(변경 함수)
        }
    	} >+</button></td>
        중략 ...
    
    
    ```
  
    1. reducers 안에 함수를 정의하고 `state명.actions` 안에 있는 함수를 export를 통해 다른 컴포넌트에서 사용하도록 한다.
    2. 사용하고자 하는 컴포넌트에서 import를 해온 후 `let dispatch = useDispatch() `를 통해 dispatch*를 사용.
       - dispatch : store로 수정 요청을 보내는 함수
    3. `dispatch(changeName())`를 통해 state를 변경해준다.
    
  - parameter를 이용한 수정은?
  
    ```js
    let user = createSlice({
    	name: 'user',
    	initialState: { name: 'Lee', age: 26 },
    	reducers: {
    		changeName(state) {
    			state.name = 'LeeGunHoo'
    		},
    		plusAge(state, action) { // << 파라미터를 하나 줌 만약 a가 10이면 10씩 증가하는 함수 보통 작명은 action이라고 많이들 함
    			state.age += action.payload // << 파라미터.paylod를 사용. 
    		}
    	}
    })
    ```
    
    
