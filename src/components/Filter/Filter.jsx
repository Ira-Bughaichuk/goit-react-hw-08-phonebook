import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactSelector';
import { filterContactsAction } from 'redux/contacts/contacts-slice';
//import scss from '../LoginForm/LoginForm.module.scss';
import scss from '../../style/baseForm.module.scss';
const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const filt = useSelector(state => state.contacts.filter);
  //console.log(filt);
  //console.log(filterValue);
  const dispatch = useDispatch();
  return (
    <section className={scss.section}>
      <div className={scss.wrapperForm}>
        <form className={scss.contentForm}>
          <div className={scss.contentForm__box}>
            <input
              name="filter"
              type="text"
              value={filterValue}
              onChange={e => dispatch(filterContactsAction(e.target.value))}
              placeholder="Filter contacts"
              className={scss.input}
            />
            <label className={scss.label}>Find contacts by name</label>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Filter;
