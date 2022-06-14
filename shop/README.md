# React 쇼핑몰 프로젝트

### 1. 목표

- React를 배우기 위한 2번째 step.
- React-Bootstrap을 활용하여 유용하고 간단한 UI로 진행.



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
