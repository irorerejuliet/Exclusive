"use client";

import ProductCard from "@/components/products/ProductCard";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "@/hooks/useProducts";
import Link from "next/link";

const Page = () => {
  const { products, error, status } = useProducts();

  if (status === "error") {
    return (
      <div className="border border-red-200 bg-red-50 p-4 rounded">
        <p className="text-red-600">
          {error?.message || "Failed to load products."}
        </p>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className="wrapper grid lg:grid-cols-4  md:grid-cols-3 grid-cols-1 gap-10.25 px-10">
        {[...Array(8)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No product</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-black text-xs py-20 ">
      <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10.25 px-10 py-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mx-auto my-20">
        <Link
          href="/product"
          className="text-white bg-red-500 text-base font-medium px-10 py-4 rounded-md"
        >
          View All Product
        </Link>
      </div>
    </div>
  );
};

export default Page;
