import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';
import { UserMenu } from './../UserMenu/UserMenu';
import { AuthNav } from './../AuthNav/AuthNav';

import { selectToken } from 'redux/auth/auth-selector';

export const AppBar = () => {
  const isToken = useSelector(selectToken);
  return <Header>{isToken ? <UserMenu /> : <AuthNav />}</Header>;
};
