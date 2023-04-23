import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './../AppBar/AppBar';
import scss from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div className={scss.container}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
