"use client";
import ProductCard from "@/components/products/ProductCard";
import CardSkeleton from "@/components/ui/CardSkeleton";

import useProducts from "@/hooks/useProducts";
import Link from "next/link";

const BestSellingProduct = () => {
  const { products, status, error } = useProducts();


if (status === "error") {
  return (
    <div className="border border-red-200 bg-red-50 p-4 rounded">
      <p className="text-red-600">
        {error?.message || "Failed to load products."}
      </p>
    </div>
  );
}

if (status === "pending" && products.length === 0) {
  return (
    <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10.25 space-y-10 md:space-y-0 md:px-0 px-10">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

if (status === "success" && products.length === 0) {
  return (
    <div>
      <p>No product</p>
    </div>
  );
}

  return (
    <section className="my-40 wrapper">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">This month</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Best Selling Products</h4>
        <Link href="/products">
          <button className="text-white bg-primary md:py-3 py-1 px-2 md:px-5 rounded-md md:w-39.75 w-20">
            View All
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 space-y-10 md:space-y-0 md:px-0 px-10">
        {products?.slice(12, 16).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProduct;
