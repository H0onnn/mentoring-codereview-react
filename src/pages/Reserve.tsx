import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAlertStore from '@src/store/alert/useAlertStore';
import useIsWishlist from '@hooks/useIsWishlist';
import { getDetailExhibition } from '@src/apis';
import { IExhibition } from 'types/exhibition';
import { QUERY_KEY } from '@constants/queryKey';
import { colors } from '@constants/colors';
import Exhibition from '@components/Exhibition';
import Button from '@components/ui/Button';

const Reserve = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const exhibitionId = Number(id);

  const {
    data: exhibition,
    isLoading,
    error,
  } = useQuery<IExhibition, Error>({
    queryKey: [QUERY_KEY.exhibitionDetail, exhibitionId],
    queryFn: () => getDetailExhibition({ id: exhibitionId }),
  });

  const { clear, showAlert } = useAlertStore();
  const { isWishList, toggleWishlist } = useIsWishlist(exhibition);

  const handleCompleteReservation = () => {
    showAlert({
      title: '예매완료',
      message: '예매가 완료되었습니다.',
      actions: [
        {
          label: '확인',
          onClick: () => {
            clear();
            navigate('/');
          },
        },
      ],
    });
  };

  const handleReserveClick = () => {
    showAlert({
      title: '예매하기',
      message: '티켓을 예매하시겠습니까?\n예매 내역은 이메일로 전송됩니다.',
      actions: [
        {
          label: '확인',
          onClick: () => {
            clear();
            handleCompleteReservation();
          },
        },
        {
          label: '취소',
          onClick: () => {
            clear();
          },
          buttonType: 'secondary',
        },
      ],
    });
  };

  if (isLoading) {
    return <div>데이터 불러오는 중...</div>;
  }

  if (error || !exhibition) {
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }

  return (
    <>
      <Layout>
        <Exhibition.Image size={390} src={exhibition.imageUrl} />
        <div>
          <Exhibition.Title title={exhibition.title} size={32} />
          <Exhibition.Price price={exhibition.price} size={24} />
          <div>
            <div>
              <Exhibition.Place place={exhibition.place} size={16} color={colors.black} />
              <Exhibition.Date date={exhibition.date} size={16} color={colors.black} />
            </div>
            <Exhibition.WishListButton size={32} isWishList={isWishList} onClick={toggleWishlist} />
          </div>
          <div>
            <Button $isFullWidth onClick={handleReserveClick}>
              예매하기
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Reserve;

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  & > div:nth-child(2) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > div {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
  }
`;
