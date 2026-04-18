"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/context/CartContext";

// Create a client
const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {children}
        <ToastContainer position="top-right" />
      </CartProvider>
    </QueryClientProvider>
  );
};

export default Provider;

interface ProviderProps {
  children: ReactNode;
}
