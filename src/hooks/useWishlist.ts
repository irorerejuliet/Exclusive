// hooks/useWishlist.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useWishlistCount = () => {
  const { data } = useQuery({
    queryKey: ["wishlist-count"],
    queryFn: async () => {
      const response = await axios.get("/api/products/isFavorite/count");
      return response.data.count;
    },
  });

  return data ?? 0;
};
