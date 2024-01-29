import React from 'react';
import styled from 'styled-components';
import { colors } from '@constants/colors';
import { ICONS } from '@constants/icons';

interface ExhibitionProps {
  children: React.ReactNode;
}

const Exhibition = ({ children, ...props }: ExhibitionProps) => {
  return <Container {...props}>{children}</Container>;
};

const Container = styled.div<{ $height?: number }>`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
`;

interface ExhibitionImageProps {
  src: string;
  size?: number;
  borderRadius?: number;
}

const ExhibitionImage = ({ src, size = 80, borderRadius = 0 }: ExhibitionImageProps) => {
  return (
    <ImageContainer $size={size} $borderRadius={borderRadius}>
      <img src={src} alt="전시 이미지" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div<{ $size: number; $borderRadius: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ $borderRadius }) => $borderRadius}px;
  }
`;

interface ExhibitionTitleProps {
  title: string;
  size?: number;
}

const ExhibitionTitle = ({ title, size = 16 }: ExhibitionTitleProps) => {
  return <Title $size={size}>{title}</Title>;
};

const Title = styled.span<{ $size: number }>`
  font-size: ${({ $size }) => $size}px;
  color: ${colors.black};
  font-weight: bold;
`;

interface ExhibitionPlaceProps {
  place: string;
  size?: number;
  color?: string;
}

const ExhibitionPlace = ({ place, size = 12, color = colors.gray1 }: ExhibitionPlaceProps) => {
  return (
    <Place $size={size} $color={color}>
      {place}
    </Place>
  );
};

const Place = styled.span<{ $size: number; $color: string }>`
  font-size: ${({ $size }) => $size}px;
  color: ${({ $color }) => $color};
`;

interface ExhibitionPriceProps {
  price: number;
  size?: number;
}

const ExhibitionPrice = ({ price, size = 12 }: ExhibitionPriceProps) => {
  return <Price $size={size}>{price.toLocaleString()}원</Price>;
};

const Price = styled.span<{ $size: number }>`
  font-size: ${({ $size }) => $size}px;
  color: ${colors.red};
  font-weight: 600;
`;

interface ExhibitionDateProps {
  date: Record<string, string>;
  size?: number;
  color?: string;
}

const ExhibitionDate = ({ date, size = 12, color = colors.gray4 }: ExhibitionDateProps) => {
  return (
    <Date $size={size} $color={color}>
      {date.started} ~ {date.ended}
    </Date>
  );
};

const Date = styled.span<{ $size: number; $color: string }>`
  font-size: ${({ $size }) => $size}px;
  color: ${({ $color }) => $color};
`;

interface WishListButtonProps {
  isWishList: boolean;
  onClick: () => void;
  size?: number;
}

const WishListButton = ({ onClick, size = 18, isWishList = false }: WishListButtonProps) => {
  return (
    <WishListButtonContainer onClick={onClick} $size={size}>
      <img src={isWishList ? ICONS.fill : ICONS.empty} alt="찜하기_버튼" />
    </WishListButtonContainer>
  );
};

const WishListButtonContainer = styled.button<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

interface ReserveButtonProps {
  onClick?: () => void;
}

const ReserveButton = ({ onClick }: ReserveButtonProps) => {
  return <Reserve onClick={onClick}>예매하기</Reserve>;
};

const Reserve = styled.button`
  width: 50px;
  height: 20px;
  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
`;

Exhibition.Image = ExhibitionImage;
Exhibition.Title = ExhibitionTitle;
Exhibition.Place = ExhibitionPlace;
Exhibition.Price = ExhibitionPrice;
Exhibition.Date = ExhibitionDate;
Exhibition.WishListButton = WishListButton;
Exhibition.ReserveButton = ReserveButton;

export default Exhibition;
