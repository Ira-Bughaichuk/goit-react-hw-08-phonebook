import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  getContactsThunk,
  deleteContactsThunk,
} from 'redux/contacts/contacts-thunk';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = state => {
  state.contacts.isLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContactsAction(state, { payload }) {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(getContactsThunk.rejected, handleRejected)
      //addContactsThunk
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(addContactsThunk.rejected, handleRejected)
      //deleteContactsThunk
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        const indexElem = state.contacts.items.findIndex(
          item => item.id === payload.id
        );
        state.contacts.items.splice(indexElem, 1);
      })
      .addCase(deleteContactsThunk.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContactsAction } = contactsSlice.actions;
