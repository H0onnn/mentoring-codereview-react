import React from 'react';
import styled from 'styled-components';
import { colors } from '@constants/colors';

interface Props {
  label: string;
  icon: string;
  onClick: () => void;
  active: boolean;
}

const BottomNavItem = ({ label, icon, onClick, active }: Props) => {
  return (
    <Container onClick={onClick} $active={active}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </Container>
  );
};

export default BottomNavItem;

const Container = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  width: 32px;
  height: 36px;

  & > img {
    width: 18px;
    height: 18px;
  }

  & > span {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: ${({ $active }) => ($active ? colors.black : colors.gray2)};
  }
`;
