
function TabContent (props) {
		// if (props.tab === 0){
		// 	return <div>내용1</div>
		// } else if(props.tab === 1){
		// 	return <div>내용2</div>
		// } else {
		// 	return <div>내용3</div>
		// }
		return (
		[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]
		)
}

export default TabContent