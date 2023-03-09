import { createSlice } from '@reduxjs/toolkit';


const menuSlice = createSlice({
	name: 'menu',
	initialState: { isOpen: false },
	reducers: {
	  setIsOpen: (state, action) => {
		state.isOpen = action.payload;
	  },
	},
  });
  
  export const { setIsOpen } = menuSlice.actions;
  export default menuSlice.reducer;