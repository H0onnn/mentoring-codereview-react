import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getApiExhibitionList } from '@src/apis';
import { QUERY_KEY } from '@constants/queryKey';
import { IExhibition } from 'types/exhibition';
import ExhibitionList from '@components/Exhibition/ExhibitionList';

export const Home = () => {
  const {
    data: exhibitionList,
    isLoading,
    error,
  } = useQuery<IExhibition[]>({
    queryKey: [QUERY_KEY.exhibitionList],
    queryFn: getApiExhibitionList,
  });

  if (isLoading) {
    return <div>데이터 불러오는 중...</div>;
  }

  if (error) {
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }

  return (
    <>
      <ExhibitionList data={exhibitionList || []} />
    </>
  );
};
