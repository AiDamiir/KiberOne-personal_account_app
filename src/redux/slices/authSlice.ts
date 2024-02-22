import { authState } from '../../interfaces/auth'
import { createSlice } from '@reduxjs/toolkit'

const initialState: authState = {
	isAuthenticated: false,
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
	},
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer
