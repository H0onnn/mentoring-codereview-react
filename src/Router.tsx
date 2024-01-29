import React from 'react';
import { Home } from '@pages/Home';
import Wishlist from '@pages/Wishlist';
import Reserve from '@pages/Reserve';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/PageLayout';
import WithHeader from './layout/WithHeader';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route element={<WithHeader />}>
          <Route path="/exhibition/:id" element={<Reserve />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
