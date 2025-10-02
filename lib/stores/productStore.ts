import { Product } from "@/types";
import { create } from "zustand";

export type ProductState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  getProduct: (id: string) => Product | undefined;
};

const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  setProducts: (products) => set({ products }),
  getProduct: (id) => {
    const { products } = get();
    const product = products.find((product) => product.id === id);
    if (!product) return;
    return product;
  },
}));

export default useProductStore;
