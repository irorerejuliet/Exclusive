import { ProductResponseData } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProductSearch(query: string) {
  const fetchProducts = useQuery({
    queryKey: ["products", query],

    queryFn: async () => {
      const res = await axios<ProductResponseData>("/api/products/search", {
        params: { q: query },
      });

      return res.data;
    },

    enabled: query.trim().length > 0,
  });

  return {
    products: fetchProducts.data?.data || [],
    error: fetchProducts.error,
    status: fetchProducts.status,
  };
}
