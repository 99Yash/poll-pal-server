import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
  const response = await fetch('/api/current_user');
  return response.json().then((data) => data);
});

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
      state.currentUser = null;
    });
  },
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
