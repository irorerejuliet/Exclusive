// "use client";

// import { Products } from "@/types/products";
// import useFetch from "./useFetch";

// type ProductResponseData = {
//   data: Products[];
// };

// const useProducts = () => {
//   const { data, isLoading, error } = useFetch<ProductResponseData>({
 
//     queryKey: ["products"],
//     url: "/api/products",
    
//   });
//    console.log(" checking by bam",data);
    
//   return {
//     loading: isLoading,
//     products: data?.data || [],
//     error,
//   };
// };

// export default useProducts;


"use client"

import { ProductResponseData } from "@/types/products";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



const useProducts = ()  => {
  const fetchProducts = useQuery({
    queryKey: ['produts'],
    queryFn: async () => {
      const res = await axios<ProductResponseData>("api/products");
      return res.data
    }
  })


  return {
    products: fetchProducts?.data?.data || [],
    error: fetchProducts?.error,
    status: fetchProducts?.status
  }
}

export default useProducts