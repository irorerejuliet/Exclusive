"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useWishlistCount = () => {
  const { data = 0 } = useQuery({
    queryKey: ["wishlist-count"],
    queryFn: async () => {
      const response = await axios.get("/api/products/isFavorite/count");
      return response.data.count;
    },
  });

  return data;
};

