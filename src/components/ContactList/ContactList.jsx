import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contacts-thunk';
import { selectFilteredContacts } from 'redux/contacts/contactSelector';

import scss from './ContactList.module.scss';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  const delateContact = id => dispatch(deleteContactsThunk(id));

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contact = contacts.map(({ name, number, id }) => (
    <li key={id} className={scss.item}>
      <p className={scss.item__text}>{name}</p>
      <p className={scss.item__text}>{number}</p>
      <button
        className={scss.item__button}
        onClick={() => delateContact(id)}
        type="button"
      >
        Delate
      </button>
    </li>
  ));

  return (
    <div className={scss.overList}>
      <ul className={scss.wrapperList}>{contact}</ul>
    </div>
  );
}

export default ContactList;
