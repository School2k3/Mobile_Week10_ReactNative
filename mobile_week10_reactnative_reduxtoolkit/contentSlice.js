// contentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://645464baa74f994b333f63ab.mockapi.io/account';

// Thunk để lấy dữ liệu từ API
export const fetchContents = createAsyncThunk('contents/fetchContents', async () => {
  const response = await fetch(API_URL);
  return response.json();
});

// Thunk để thêm nội dung mới
export const addContent = createAsyncThunk('contents/addContent', async (content) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });
  return response.json();
});

// Thunk để cập nhật nội dung
export const updateContent = createAsyncThunk('contents/updateContent', async ({ id, content }) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });
  return response.json();
});

// Thunk để xóa nội dung
export const deleteContent = createAsyncThunk('contents/deleteContent', async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

// Slice
const contentSlice = createSlice({
  name: 'contents',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(addContent.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateContent.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteContent.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default contentSlice.reducer;
