import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, Cart } from "@/types";

type CartMap = Record<string, number>;

type CartState = {
  // states
  cartItems: CartMap;
  total: number;
  // actions
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string, qty?: number) => void;
  deleteItemFromCart: (id: string) => void;
  clearCart: () => void;
  getCartArray: (products: Product[]) => Cart[];
  getTotalPrice: (products: Product[]) => number;
};

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // initial states
      cartItems: {},
      total: 0,

      addToCart: (id, qty = 1) => {
        const { cartItems, total } = get();
        const items = { ...cartItems };
        items[id] = (items[id] ?? 0) + qty;
        set({ cartItems: items, total: total + qty });
      },

      removeFromCart: (id, qty = 1) => {
        const { cartItems, total } = get();
        if (!cartItems[id]) return;
        const items = { ...cartItems };
        items[id] = Math.max(0, items[id] - qty);
        if (items[id] === 0) delete items[id];
        set({ cartItems: items, total: Math.max(0, total - qty) });
      },

      deleteItemFromCart: (id) => {
        const { cartItems, total } = get();
        const count = cartItems[id] ?? 0;
        if (!count) return;
        const items = { ...cartItems };
        delete items[id];
        set({ cartItems: items, total: Math.max(0, total - count) });
      },

      clearCart: () => set({ cartItems: {}, total: 0 }),

      getCartArray: (products: Product[]) => {
        const { cartItems } = get();
        const arr: Cart[] = [];
        for (const [id, qty] of Object.entries(cartItems)) {
          const prod = products.find((p) => p.id === id);
          if (prod) arr.push({ ...prod, quantity: qty });
        }
        return arr;
      },

      getTotalPrice: (products: Product[]) => {
        const { cartItems } = get();
        return Object.entries(cartItems).reduce((acc, [id, qty]) => {
          const prod = products.find((p) => p.id === id);
          return prod ? acc + prod.price * qty : acc;
        }, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
