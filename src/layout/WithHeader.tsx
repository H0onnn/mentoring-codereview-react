import React from 'react';
import { Outlet, useLocation, matchPath } from 'react-router-dom';
import { PATHNAME_TO_TITLE } from '@constants/pathname';
import Header from '@components/ui/Header';

const WithHeader = () => {
  const location = useLocation();

  return (
    <>
      <Header title={getHeaderTitle(location.pathname)} />
      <Outlet />
    </>
  );
};

export default WithHeader;

const getHeaderTitle = (pathname: string) => {
  const title = PATHNAME_TO_TITLE.find((item) =>
    matchPath({ path: item.pathname, end: true }, pathname),
  )?.title;

  return title || '';
};
