"use client";

import useCartStore from "@/lib/stores/cartStore";

type CounterProps = {
  productId: string;
};

function Counter({ productId }: CounterProps) {
  const { cartItems, addToCart, removeFromCart } = useCartStore();
  const count = cartItems[productId] ?? 0;
  return (
    <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-1 rounded border border-slate-200 max-sm:text-sm text-slate-600">
      <button
        onClick={() => removeFromCart(productId)}
        className="p-1 select-none"
        disabled={count === 0}
      >
        -
      </button>
      <p className="p-1">{cartItems[productId]}</p>
      <button onClick={() => addToCart(productId)} className="p-1 select-none">
        +
      </button>
    </div>
  );
}

export default Counter;
