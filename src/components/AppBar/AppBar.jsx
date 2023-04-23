import { useSelector } from 'react-redux';
import { UserMenu } from './../UserMenu/UserMenu';
import { AuthNav } from './../AuthNav/AuthNav';

import { selectToken } from 'redux/auth/auth-selector';
import scss from './AppBar.module.scss';

export const AppBar = () => {
  const isToken = useSelector(selectToken);
  return (
    <header className={scss.header}>
      <div className={scss.containerHeader}>
        <div className={scss.logo}>PhoneBook</div>
        {isToken ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
