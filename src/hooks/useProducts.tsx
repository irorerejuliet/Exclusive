"use client";
import { useState } from "react";
import useFetch from "./useFetch";
import { Products } from "@/types/products";

const useProducts = () => {
  const { data, isLoading, error } = useFetch({
    url: "products",
  });

  // useEffect(() => {
  //   async function fetchProducts() {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("http://localhost:3000/api/products");
  //       if (!res.ok) throw new Error("Unable to fetch data");
  //       const data = await res.json();
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  return {
    loading: isLoading,
    products: (data?.data as Products[]) || [],
    error: error,
  };
};

export default useProducts;
