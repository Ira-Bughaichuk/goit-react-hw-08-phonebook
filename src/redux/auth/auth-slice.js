import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logOutThunk,
  refreshUserThunk,
} from './auth-thunk';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const initialState = {
  token: null,
  isLoading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.token = payload.token;
      })

      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
      })

      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.user = payload;
        state.token = null;
      })
      .addCase(refreshUserThunk.pending, handlePending)
      .addCase(refreshUserThunk.rejected, handleRejected)
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
