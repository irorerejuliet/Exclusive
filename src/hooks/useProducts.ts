

"use client";

import { ProductResponseData } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const fetchProducts = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios<ProductResponseData>("api/products");
      return res.data;
    },
  });

  return {
    products: fetchProducts?.data?.data || [],
    error: fetchProducts?.error,
    status: fetchProducts?.status,
  };
};

export default useProducts;
