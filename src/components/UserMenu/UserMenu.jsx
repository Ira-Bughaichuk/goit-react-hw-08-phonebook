import { useDispatch, useSelector } from 'react-redux';

import { logOutThunk } from 'redux/auth/auth-thunk';
import { selectUser } from './../../redux/auth/auth-selector';
import { Wrapper } from './UserMenu.styled';
import { token } from 'services/authService';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  const logOut = () => {
    dispatch(logOutThunk());
    token.unSet();
  };

  return (
    <Wrapper>
      <p>Welcome, {user.email}</p>
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </Wrapper>
  );
};
