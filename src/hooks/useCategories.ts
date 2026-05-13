"use client"

import { CategoryApiResponse } from "@/types/category"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

 



const useCategories = () => {
    const fetchCategories = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios<CategoryApiResponse>("/api/categories");
            return res.data
        }
    })
  return {
    categories: fetchCategories?.data?.data || [],
    error: fetchCategories.error,
    status: fetchCategories.status
  };
}

export default useCategories
