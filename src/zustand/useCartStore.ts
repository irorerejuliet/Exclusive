import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string;
  quantity: number;
};

interface CartState {
  cartItems: CartItem[];

  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;

  updateQuantity: (id: string, quantity: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (item) =>
        set((state) => {
          const exists = state.cartItems.find((i) => i.id === item.id);

          if (exists) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i,
              ),
            };
          }

          return { cartItems: [...state.cartItems, item] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((i) => i.id !== id),
        })),

      clearCart: () => set({ cartItems: [] }),

      // 🔥 THIS IS WHAT FIXES YOUR + / -
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cartItems: state.cartItems
            .map((item) => (item.id === id ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0),
        })),
    }),
    { name: "cart-storage" },
  ),
);
