

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