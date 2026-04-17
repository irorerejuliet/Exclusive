"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
// Create a client
const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer position="top-right" />
    </QueryClientProvider>
  );
};

export default Provider;

interface ProviderProps {
  children: ReactNode;
}
