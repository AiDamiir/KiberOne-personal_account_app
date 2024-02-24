import { createSlice } from '@reduxjs/toolkit'
import { authState } from '../../interfaces/auth'

const initialState: authState = {
	isAuthenticated: false,
	token: '',
	cash: '',
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess(state) {
			state.isAuthenticated = true
		},
		logout(state) {
			state.isAuthenticated = false
		},
		setToken(state, action) {
			state.token = action.payload
		},
		setCash(state, action) {
			state.cash = action.payload
		},
	},
})

export const { loginSuccess, logout, setToken, setCash } = authSlice.actions
export default authSlice.reducer
