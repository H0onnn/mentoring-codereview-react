import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import BottomNav from '@components/ui/NavBar/BottomNav';

const Layout = () => {
  return (
    <PageLayout>
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </PageLayout>
  );
};

export default Layout;

const PageLayout = styled.div`
  width: 100%;
  height: 100vh;

  padding: 10px;

  overflow-y: hidden;
`;
