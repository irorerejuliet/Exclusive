"use client";

import useFetch from "./useFetch";
import { Products } from "@/types/products";

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
