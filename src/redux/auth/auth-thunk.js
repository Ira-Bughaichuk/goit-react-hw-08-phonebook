import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerService,
  logInService,
  logOutService,
  refreshUserService,
  token,
} from '../../services/authService';

export const registerThunk = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const data = await registerService(credentials);
      return data;
    } catch (error) {
      alert('Check your details password must be at least 7 characters');
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await logInService(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logOutService();
      token.unSet();
      alert('You have been logged out successfully');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const savedToken = getState().auth.token;
      if (!savedToken) {
        return rejectWithValue('there is no token');
      }
      token.set(savedToken);
      const data = await refreshUserService();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
