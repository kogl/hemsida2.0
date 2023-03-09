import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedUtb: null,
};

export const utbSlice = createSlice({
  name: 'utb',
  initialState,
  reducers: {
    setSelectedUtb: (state, action) => {
      state.selectedUtb = action.payload;
    },
    clearSelectedUtb: (state) => {
      state.selectedUtb = null;
    },
  },
});

export const { setSelectedUtb, clearSelectedUtb } = utbSlice.actions;

export default utbSlice.reducer;
