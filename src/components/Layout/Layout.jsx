import { AppBar } from 'components/appBar/appBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
