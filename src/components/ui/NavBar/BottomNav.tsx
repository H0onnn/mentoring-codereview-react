import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BottomNavItem from './BottomNavItem';
import { NAV_ITEMS } from '@constants/icons';
import { colors } from '@constants/colors';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {NAV_ITEMS.map((item) => (
        <BottomNavItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          active={location.pathname === item.path}
          onClick={() => navigate(item.path)}
        />
      ))}
    </Container>
  );
};

export default BottomNav;

const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: ${colors.white};

  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.05);
`;
