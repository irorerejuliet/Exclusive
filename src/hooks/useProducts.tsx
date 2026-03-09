"use client"
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useProducts = () => {
   const { data, isLoading, error } = useFetch({
     url: "products",
   });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Unable to fetch data");
        const data = await res.json();
        console.log(data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  console.log(data, "The data here");
  return {
    loading: isLoading,
    data: data,
    error: error,
  };
};

export default useProducts;
