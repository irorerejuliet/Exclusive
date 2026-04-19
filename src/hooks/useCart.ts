import { useCartStore } from "@/zustand/useCartStore";

// Cart
export const useCartItems = () => useCartStore((state) => state.cartItems);
export const useAddToCart = () => useCartStore((state) => state.addToCart);
export const useRemoveFromCart = () =>
  useCartStore((state) => state.removeFromCart);
export const useClearCart = () => useCartStore((state) => state.clearCart);

// Derived values
export const useCartCount = () =>
  useCartStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
  );

export const useCartSubtotal = () =>
  useCartStore((state) =>
    state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
