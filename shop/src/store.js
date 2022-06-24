import { configureStore, createSlice, current } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

//useState와 비슷한 원리, store폴더 안에 userSlice.js로 이동
// let user = createSlice({
// 	name: 'user',
// 	initialState: { name: 'Lee', age: 26 },
// 	reducers: {
// 		changeName(state) {
// 			state.name = 'LeeGunHoo'
// 		},
// 		plusAge(state) {
// 			state.age += 1
// 		}
// 	}
// })



// 함수들을 빼내는 작업 (reducers 안의 내용)
// export let { changeName, plusAge } = user.actions

// let stockCnt = createSlice({
// 	name: 'stockCnt',
// 	initialState: [0]
// })

let stock = createSlice({
	name: 'stock',
	initialState: [10, 11, 12]
})

let cartItems = createSlice({
	name: 'cartItems',
	initialState: [
		{ id: 0, name: 'White and Black', count: 2 },
		{ id: 2, name: 'Grey Yordan', count: 1 }
	],
	reducers: {
		countUp(state, action) {
			let findId = state.findIndex((obj)=>{
				return obj.id === action.payload
			})
			state[findId].count++
		},

		countMinus(state, action) {
			let findId = state.findIndex((obj)=>{
				return obj.id === action.payload
			})
			if (state[findId].count === 1) {
				if (window.confirm('장바구니에서 삭제하시겠습니까?')) {
					alert('삭제 되었습니다.')
					state.splice(findId, 1)
				} else {
					alert('삭제가 취소되었습니다.')
				}
			} else {
				state[findId].count--
			}},

		pushItem(state, action) {
			console.log(current(state))
			let findIdx = state.findIndex((obj)=>{
				return obj.id === action.payload.id
			})
			console.log(findIdx)
			if (findIdx === -1) {
				state.push(action.payload)
			} else {
				state[findIdx].count += 1
			}
			// state[findIdx].id === action.payload.id ? state[findIdx].count += 1 : state.push(action.payload)
			// state.push(action.payload)
		},

			deleteItem(state, action) {
				let findIdx = state.findIndex((idx)=>{
					return idx === action.payload.id
				})
				if (window.confirm('장바구니에서 삭제하시겠습니까?')) {
					alert('삭제 되었습니다.')
					state.splice(findIdx, 1)
				} else {
					alert('삭제가 취소되었습니다.')
				}
			}
	}
})

export let { countUp, countMinus, pushItem, deleteItem } = cartItems.actions


export default configureStore({
	reducer: {
		user: user.reducer,
		stock: stock.reducer,
		cartItems: cartItems.reducer
	}
})