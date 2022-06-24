import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { plusAge } from '../store/userSlice.js'
import { countUp, countMinus, deleteItem } from './../store.js'

function Cart() {

	let cartItems = useSelector((state) => state.cartItems) // Redux store를 가져와 줌, 모든 state가 이 곳에 남아있다.
	let userName = useSelector((state) => state.user)
	let dispatch = useDispatch()

	return (
		<div>
			<h3> {userName.name}의 장바구니, {userName.age} </h3>
			<button onClick={() => { dispatch(plusAge()) }}>+</button>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
						<th>삭제하기</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((cartItem, idx) =>
						<tr key={idx}>
							<td>{cartItem.id}</td>
							<td>{cartItem.name}</td>
							<td>{cartItem.count}</td>
							<td><button onClick={() => {
								dispatch(countUp(cartItem.id))
							}} >+</button> / <button onClick={()=>{
								dispatch(countMinus(cartItem.id))
							}}>-</button></td>
							<td><button onClick={()=>{
								dispatch(deleteItem(cartItem.id))
							}}>x</button></td>
						</tr>
					)}

				</tbody>
			</Table>
		</div>
	)
}

export default Cart