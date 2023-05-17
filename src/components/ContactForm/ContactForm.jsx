import { useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactSelector';
import { addContactsThunk } from 'redux/contacts/contacts-thunk';
import scss from '../../style/baseForm.module.scss';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const actions = {
    name: setName,
    number: setNumber,
  };
  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
          contact.number.trim() === number.trim()
      )
    ) {
      return alert(`${name} already exists`);
    }
    dispatch(addContactsThunk(newContact));
    handleReset();
  };
  const handleReset = () => {
    // console.log(Object.values(actions));
    Object.values(actions).map(item => item(''));
  };
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <>
      <div className={scss.wrapperForm}>
        <form onSubmit={handleSubmit}>
          <div className={scss.contentForm__box}>
            <input
              id={nameInputId}
              onChange={handleChange}
              name="name"
              value={name}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={scss.input}
            />
            <label htmlFor={nameInputId} className={scss.label}>
              Name
            </label>
          </div>
          <div className={scss.contentForm__box}>
            <input
              id={numberInputId}
              onChange={handleChange}
              name="number"
              value={number}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={scss.input}
            />
            <label htmlFor={numberInputId} className={scss.label}>
              Number
            </label>
          </div>

          <button className={scss.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
