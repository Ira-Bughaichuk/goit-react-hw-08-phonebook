import React from 'react';
import css from './ContactList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contacts-thunk';
import { selectFilteredContacts } from 'redux/contacts/contactSelector';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  //const filt = useSelector(state => state);
  // console.log(filt);

  const dispatch = useDispatch();
  const delateContact = id => dispatch(deleteContactsThunk(id));

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contact = contacts.map(({ name, number, id }) => (
    <li key={id} className={css.item}>
      <p className={css.item__text}>
        {name} : {number}
      </p>
      <button
        className={css.item__button}
        onClick={() => delateContact(id)}
        type="button"
      >
        Delate
      </button>
    </li>
  ));

  return <ul className={css.list}>{contact}</ul>;
}

export default ContactList;
