import useWishlistStore, {
  useAddWishlist,
  useRemoveWishlist,
} from '@src/store/wishlist/useWishlistStore';
import { IExhibition } from 'types/exhibition';

const useIsWishlist = (data?: IExhibition) => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addWishlist = useAddWishlist();
  const removeWishlist = useRemoveWishlist();

  if (!data) {
    return { isWishList: false, toggleWishlist: () => {} };
  }

  const isWishList = wishlist.some((item) => item.id === data.id);

  const toggleWishlist = () => {
    if (isWishList) {
      removeWishlist(data.id);
    } else {
      addWishlist(data);
    }
  };

  return { isWishList, toggleWishlist };
};

export default useIsWishlist;
