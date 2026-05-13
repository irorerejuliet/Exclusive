import { CategoryApiResponse } from "@/types/category";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategoryProducts = (categoryId: string) => {
  const fetchProducts = useQuery({
    queryKey: ["category-products", categoryId],

    queryFn: async () => {
      const res = await axios<CategoryApiResponse>(`/api/products/categories/${categoryId}`);

      return res.data;
    },

    enabled: !!categoryId,
  });

  return {
    products: fetchProducts?.data?.data || [],
    error: fetchProducts.error,
    status: fetchProducts.status,
  };
};

export default useCategoryProducts;


