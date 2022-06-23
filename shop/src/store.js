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
	]
})

export default configureStore({
	reducer: {
		user: user.reducer,
		stock: stock.reducer,
		cartItems: cartItems.reducer

	}
})