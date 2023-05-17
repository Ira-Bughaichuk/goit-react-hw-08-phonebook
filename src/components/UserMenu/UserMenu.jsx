import { useDispatch, useSelector } from 'react-redux';

import { logOutThunk } from 'redux/auth/auth-thunk';
import { selectUser } from './../../redux/auth/auth-selector';
import scss from './UserMenu.module.scss';
import { token } from 'services/authService';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOut = () => {
    dispatch(logOutThunk());
    token.unSet();
  };

  return (
    <div className={scss.menu}>
      <p className={scss.menu__user}>Welcome, {user.email}</p>
      <button className={scss.menu__btn} type="button" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};
