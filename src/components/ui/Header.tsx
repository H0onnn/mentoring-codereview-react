import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '@constants/colors';
import { ICONS } from '@constants/icons';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <img src={ICONS.back} alt="뒤로가기" onClick={() => navigate(-1)} />
      <span>{title}</span>
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  width: 100%;
  height: 65px;

  display: flex;
  align-items: center;
  padding: 0 20px;

  border-bottom: 1px solid ${colors.gray5};

  & > img {
    width: 30px;
    height: 26px;

    cursor: pointer;
  }

  & > span {
    font-size: 20px;
    font-weight: 600;
    color: ${colors.black2};
    text-align: center;
    margin-left: 10px;
  }
`;
