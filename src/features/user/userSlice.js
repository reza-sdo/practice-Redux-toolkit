import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncUsers = createAsyncThunk(
  'user/getAsyncUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  loading: false,
  data: [],
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = '';
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default userSlice.reducer;
