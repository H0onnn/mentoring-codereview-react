import TICKET_ICON from '@assets/icons/ticket.png';
import STAR_FILL from '@assets/icons/star-fill.png';
import STAR_EMPTY from '@assets/icons/star-empty.png';
import BACK_ICON from '@assets/icons/back.png';

export const NAV_ITEMS = [
  {
    label: '전시회',
    path: '/',
    icon: TICKET_ICON,
  },
  {
    label: '찜목록',
    path: '/wishlist',
    icon: STAR_FILL,
  },
] as const;

export const ICONS = {
  fill: STAR_FILL,
  empty: STAR_EMPTY,
  back: BACK_ICON,
} as const;
