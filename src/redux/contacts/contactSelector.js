import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.contacts.filter;

export const selectContacts = state => {
  return state.contacts.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterElem) => {
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filterElem.toLowerCase())
    );
  }
);
