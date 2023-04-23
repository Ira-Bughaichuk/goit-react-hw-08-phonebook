import { NavLink } from 'react-router-dom';
import scss from './AuthNav.module.scss';
export const AuthNav = () => {
  return (
    <nav className={scss.navigation}>
      <NavLink className={scss.navigation__link} to="/register">
        Register
      </NavLink>
      <NavLink className={scss.navigation__link} to="/login">
        Log In
      </NavLink>
    </nav>
  );
};
