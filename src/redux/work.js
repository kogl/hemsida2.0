import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedWork: null,
};

export const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    setSelectedWork: (state, action) => {
      state.selectedWork = action.payload;
    },
    clearSelectedWork: (state) => {
      state.selectedWork = null;
    },
  },
});

export const { setSelectedWork, clearSelectedWork } = workSlice.actions;

export default workSlice.reducer;
