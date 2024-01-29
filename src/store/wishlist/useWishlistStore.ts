import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IExhibition } from 'types/exhibition';

interface WishlistState {
  wishlist: IExhibition[];
  addWishlist: (exhibition: IExhibition) => void;
  removeWishlist: (id: number) => void;
}

const useWishlistStore = create(
  persist<WishlistState>(
    (set) => ({
      wishlist: [],
      addWishlist: (exhibition) =>
        set((state) => ({
          wishlist: [...state.wishlist, exhibition],
        })),
      removeWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'wishlist',
      getStorage: () => localStorage,
    },
  ),
);

export const useAddWishlist = () => useWishlistStore((state) => state.addWishlist);
export const useRemoveWishlist = () => useWishlistStore((state) => state.removeWishlist);

export default useWishlistStore;
