import {createSlice} from '@reduxjs/toolkit'

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

export let { changeName, plusAge } = user.actions


export default user