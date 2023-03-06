import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isSwe: true,
}

export const langugeSlice = createSlice({
	name: 'langugeSlice',
	initialState,
	reducers: {
		toggleLang: state => {
			state.isSwe = !state.isSwe
		}
	},
})

// Action creators are generated for each case reducer function
export const { toggleLang } = langugeSlice.actions

export default langugeSlice.reducer