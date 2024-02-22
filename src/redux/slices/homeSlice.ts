import { homeState } from '../../interfaces/home'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: homeState = {
	page: 'профиль',
}

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setPage(state, action: PayloadAction<string>) {
			state.page = action.payload
		},
	},
})

export const { setPage } = homeSlice.actions
export default homeSlice.reducer
