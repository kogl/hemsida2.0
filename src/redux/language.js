// import { createSlice } from '@reduxjs/toolkit'

// // const initialState = {
// // 	isSwe: true,
// // }

// const language = createSlice({
// 	name: 'language',
// 	initialState: { isSwe: true },

// 	reducers: {
// 		setIsSwe: (state, action) => {
// 			state.isSwe = action.payload;
// 		},
// 	},
// })

// // Action creators are generated for each case reducer function
// export const { toggleLang } = language.actions

// export default language.reducer


import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { isSwe: true },
  reducers: {
    setIsSwe: (state, action) => {
      state.isSwe = action.payload;
    },
  },
});

export const { setIsSwe } = languageSlice.actions;
export default languageSlice.reducer;