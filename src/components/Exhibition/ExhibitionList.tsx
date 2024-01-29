import React from 'react';
import styled from 'styled-components';
import { IExhibition } from 'types/exhibition';
import ExhibitionItem from './ExhibitionItem';

interface Props {
  data: IExhibition[];
}

const ExhibitionList = ({ data }: Props) => {
  return (
    <Layout>
      {data?.map((exhibition) => (
        <ExhibitionItem key={exhibition.id} data={exhibition} />
      ))}
    </Layout>
  );
};

export default ExhibitionList;

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
