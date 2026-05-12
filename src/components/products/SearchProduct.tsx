"use client";


import CardSkeleton from "../ui/CardSkeleton";
import useProductSearch from "@/hooks/useProductSearch";
import ProductCard from "./ProductCard";
import { Products, } from "@/types/products";

const SearchProduct = () => {
  const searchQuery =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("query") || ""
    : "";

  const { products = [], status, error } = useProductSearch(searchQuery);

  if (status === "pending") {
    return (
      <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 py-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="wrapper py-10">
        <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
          <p className="text-red-600">
            {error?.message || "Failed to search products."}
          </p>
        </div>
      </div>
    );
  }

  if (status === "success" && products.length === 0) {
    return (
      <div className="wrapper py-10 text-center">
        <h2 className="text-2xl font-semibold">
          No products found for &quot;{searchQuery}&quot;
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="wrapper py-10">
        <h1 className="text-2xl font-bold mb-8">
          Results for &quot;{searchQuery}&quot;
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: Products) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchProduct;
