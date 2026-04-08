"use client";

import { Products } from "@/types/products";
import { useFetch } from "./useFetch";

type ProductResponseData = {
  data: Products[];
};

const useProducts = () => {
  const { data, isLoading, error } = useFetch<ProductResponseData>({
    url: "products",
  });

  return {
    loading: isLoading,
    products: data?.data || [],
    error,
  };
};

export default useProducts;
