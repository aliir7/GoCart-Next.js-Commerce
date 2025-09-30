import { create } from "zustand";

type Rating = {
  productId: string;
  value: number;
};

export type RatingState = {
  ratings: Rating[];
  addRating: (productId: string, value: number) => void;
  updateRating: (productId: string, value: number) => void;
  clearRating: () => void;
};

const useRatingStore = create<RatingState>((set) => ({
  ratings: [],
  addRating: (productId, value) =>
    set((state) => ({
      ratings: [...state.ratings, { productId, value }],
    })),
  updateRating: (productId, value) =>
    set((state) => ({
      ratings: state.ratings.map((rate) =>
        rate.productId === productId ? { ...rate, value } : rate
      ),
    })),
  clearRating: () => ({ ratings: [] }),
}));

export default useRatingStore;
