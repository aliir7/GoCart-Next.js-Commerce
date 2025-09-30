import { Product } from "@/types";
import { create } from "zustand";

export type ProductState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};

const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useProductStore;
