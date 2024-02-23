import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { navState } from '../../interfaces/home'

const initialState: navState = {
	screen: 'profile',
	navOpened: false,
}

const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setScreen(state, action: PayloadAction<string>) {
			state.screen = action.payload
		},
		toggleNavIcon(state, _: PayloadAction<boolean>) {
			state.navOpened = !state.navOpened
		},
	},
})

export const { setScreen, toggleNavIcon } = navSlice.actions
export default navSlice.reducer
