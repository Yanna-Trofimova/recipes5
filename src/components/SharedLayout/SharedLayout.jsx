import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
