import { Outlet } from 'react-router-dom'


function About() {
	return(
		<>
			<h4>오늘의 이벤트</h4>
			<Outlet></Outlet>
		</>
	)
}

export default About