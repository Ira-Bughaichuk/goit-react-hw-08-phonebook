import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContact,
  fetchContacts,
  addContact,
} from 'services/contactsService';
import { token } from './../../services/authService';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const savedToken = getState().auth.token;
      if (!savedToken) {
        return rejectWithValue('there is no token');
      }
      token.set(savedToken);
      const resp = await fetchContacts();
      return resp;
    } catch {
      return rejectWithValue();
    }
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const resp = await addContact(contact);
      return resp;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const resp = await deleteContact(id);
      return resp;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);
