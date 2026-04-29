import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "@/lib/searchProducts";

export default function useProductSearch(query: string) {
  return useQuery({
    queryKey: ["products", query], // 🔥 IMPORTANT FIX
    queryFn: () => searchProducts(query),

    enabled: query.trim().length >= 2, // don't run on empty input

    staleTime: 1000 * 60, // cache for 1 min

    refetchOnWindowFocus: false,
  });
}
