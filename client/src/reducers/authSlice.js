import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
  const response = await fetch('/api/current_user');
  return response.json().then((data) => data);
});

export const handleToken = createAsyncThunk(
  'auth/handleToken',
  async (token) => {
    const res = await axios.post('/api/stripe', token);
    return res.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: { currentUser: null },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.currentUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.currentUser = false;
    });
  },
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
