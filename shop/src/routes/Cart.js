import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart() {

	let cartItems = useSelector((state)=> state.cartItems) // Redux store를 가져와 줌, 모든 state가 이 곳에 남아있다.

	return(
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
					</tr>
				</thead>
				<tbody>
					
						{cartItems.map((cartItem, idx)=>{
							return(
								<tr key={idx}>
									<td>{idx + 1}</td>
									<td>{cartItem.name}</td>
									<td>{cartItem.count}</td>
									<td>-</td>
								</tr>
							)
						})}

					
				</tbody>
			</Table>
		</div>
	)
}

export default Cart