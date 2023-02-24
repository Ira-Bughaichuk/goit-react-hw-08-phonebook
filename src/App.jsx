import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUserThunk } from './redux/auth/auth-thunk';
import { Route, Routes } from 'react-router';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PrivateRoute/PublicRoute/PublicRoute';
import { Layout } from './components/Layout/Layout';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
