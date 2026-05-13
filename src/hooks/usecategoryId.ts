import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategoryId = (categoryId: string) => {
  const fetchCategoryById = useQuery({
    queryKey: ["categories", categoryId],
    queryFn: async () => {
      const res = await axios(`/api/categories/${categoryId}`);

      return res.data;
    },

    enabled: !!categoryId,
  });

  return {
    category: fetchCategoryById?.data?.data,
    error: fetchCategoryById.error,
    status: fetchCategoryById.status,
  };
};

export default useCategoryId;
