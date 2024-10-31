import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: 'contents',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    fetchContentsRequest: (state) => {
      state.status = 'loading';
    },
    fetchContentsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    fetchContentsFailure: (state) => {
      state.status = 'failed';
    },
    addContentRequest: (state, action) => {},
    addContentSuccess: (state, action) => {
      state.items.push(action.payload);
    },
    updateContentRequest: (state, action) => {},
    updateContentSuccess: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteContentRequest: (state, action) => {},
    deleteContentSuccess: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  fetchContentsRequest,
  fetchContentsSuccess,
  fetchContentsFailure,
  addContentRequest,
  addContentSuccess,
  updateContentRequest,
  updateContentSuccess,
  deleteContentRequest,
  deleteContentSuccess,
} = contentSlice.actions;

export default contentSlice.reducer;
