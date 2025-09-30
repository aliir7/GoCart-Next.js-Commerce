import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartState = {
  // states
  cartItems: Record<string, number>;
  total: number;
  // actions
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  deleteItemFromCart: (id: string) => void;
  clearCart: () => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      // initial states
      cartItems: {},
      total: 0,

      addToCart: (id) =>
        set((state) => {
          const items = { ...state.cartItems };
          items[id] = (items[id] ?? 0) + 1;
          return { cartItems: items, total: state.total + 1 };
        }),

      removeFromCart: (id) =>
        set((state) => {
          const items = { ...state.cartItems };
          if (!items[id]) return state;
          items[id] -= 1;
          if (items[id] <= 0) delete items[id];
          return { cartItems: items, total: Math.max(0, state.total - 1) };
        }),

      deleteItemFromCart: (id) =>
        set((state) => {
          const items = { ...state.cartItems };
          const count = items[id] ?? 0;
          delete items[id];
          return { cartItems: items, total: Math.max(0, state.total - count) };
        }),

      clearCart: () => ({ cartItems: {}, total: 0 }),
    }),
    {
      name: "cart-storage", //save in localStorage
    }
  )
);

export default useCartStore;
