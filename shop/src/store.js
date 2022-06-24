import { configureStore, createSlice, } from '@reduxjs/toolkit'
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
		countUp(state, itemIdx) {
			state[itemIdx.payload].count += 1
		}
	}
})

export let { countUp } = cartItems.actions


export default configureStore({
	reducer: {
		user: user.reducer,
		stock: stock.reducer,
		cartItems: cartItems.reducer
	}
})