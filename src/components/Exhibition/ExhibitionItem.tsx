import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import useIsWishlist from '@hooks/useIsWishlist';
import { IExhibition } from 'types/exhibition';
import Exhibition from '.';

interface Props {
  data: IExhibition;
}

const ExhibitionItem = ({ data }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isWishList, toggleWishlist } = useIsWishlist(data);

  return (
    <Exhibition>
      <ContentsContainer>
        <Exhibition.Image src={data.imageUrl} borderRadius={8} />
        <ContentsGroup>
          <div>
            <Exhibition.Title title={data.title} />
            <Exhibition.WishListButton isWishList={isWishList} onClick={toggleWishlist} />
          </div>

          <Exhibition.Place place={data.place} />

          <Exhibition.Price price={data.price} />

          <div>
            {location.pathname !== '/wishlist' ? (
              <>
                <Exhibition.Date date={data.date} />
                <Exhibition.ReserveButton onClick={() => navigate(`/exhibition/${data.id}`)} />
              </>
            ) : (
              <>
                <Exhibition.ReserveButton onClick={() => navigate(`/exhibition/${data.id}`)} />
                <Exhibition.Date date={data.date} />
              </>
            )}
          </div>
        </ContentsGroup>
      </ContentsContainer>
    </Exhibition>
  );
};

export default ExhibitionItem;

const ContentsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
  height: 100%;
`;

const ContentsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  flex: 1;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div:last-child {
    align-items: flex-end;
  }
`;
