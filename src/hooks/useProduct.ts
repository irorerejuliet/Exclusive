import { Products } from "@/types/products";
import useFetch from "./useFetch";

const useProduct = (productId?: string) => {
  const { data, isLoading, error } = useFetch<Products>({
    queryKey: ["product", productId ?? ""],
    url: `/api/products/${productId}`,
    
  });

  return {
    product: data,
    isLoading,
    error,
  };
};
 export  default useProduct