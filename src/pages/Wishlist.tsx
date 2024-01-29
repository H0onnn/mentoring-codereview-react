import React from 'react';
import styled from 'styled-components';
import useWishlistStore from '@src/store/wishlist/useWishlistStore';
import { colors } from '@constants/colors';
import ExhibitionList from '@components/Exhibition/ExhibitionList';

const Wishlist = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);

  return (
    <div>
      {wishlist.length === 0 ? (
        <EmptyWishlist>
          <span>찜해놓은 전시회가 없습니다</span>
          <span>맘에 드는 전시회가 있다면 찜해보세요</span>
        </EmptyWishlist>
      ) : (
        <ExhibitionList data={wishlist} />
      )}
    </div>
  );
};

export default Wishlist;

const EmptyWishlist = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > span {
    font-size: 16px;
  }

  & > span:first-child {
    color: ${colors.black};
  }

  & > span:last-child {
    color: ${colors.gray2};
  }
`;
