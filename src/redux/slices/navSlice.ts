import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { navState } from '../../interfaces/home'

const initialState: navState = {
	screen: 'profile',
}

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setScreen(state, action: PayloadAction<string>) {
			state.screen = action.payload
		},
	},
})

export const { setScreen } = navSlice.actions
export default navSlice.reducer
