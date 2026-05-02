import { ProductResponseData } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFavorite = () => {
  return useQuery({
    queryKey: ["isFavorite"],
    queryFn: async () => {
      const res = await axios<ProductResponseData>("/api/products/isFavorite");
      return res.data.data;
    },
  });
};
