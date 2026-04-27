import { searchProducts } from "@/lib/supabase/searchProducts";

import { useQuery } from "@tanstack/react-query";



export function useProductSearch(query: string) {
  return useQuery({
    queryKey: ["products", query],
    queryFn: () => searchProducts(query),
    enabled: query.trim().length > 1,
  });

  
}
