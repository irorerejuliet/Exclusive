"use client";


import ProductCard from "@/components/products/ProductCard";
import SalesTime from "@/components/products/SalesTime";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "@/hooks/useProducts";

import Link from "next/link";
import { Bounce } from "react-awesome-reveal";

const FlashSales = () => {
  const { products, status, error} = useProducts();
  

  
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
    <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10.25 space-y-10 md:space-y-0 md:px-0 px-10 text-2xl">
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
    <section className="bg-white text-black">
      <div className=" wrapper ">
        <div className="flex gap-4 items-center">
          <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
          <p className="text-primary text-base font-semibold">Today&apos;s</p>
        </div>
        <SalesTime />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-10 md:px-0">
          {status === "pending"
            ? [1, 2, 3, 4].map((_, i) => <CardSkeleton key={i} />)
            : products
                ?.slice(0, 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
        </div>
        <Bounce>
          <div className="text-center mx-auto my-20">
            <Link
              href="/products"
              className="text-white bg-red-500 text-base font-medium px-10 py-4 rounded-md my-16 w-58.5 md:mx-0 mx-10 "
            >
              View All Products
            </Link>
          </div>
        </Bounce>
        <div className="w-full border-t border-gray-200"></div>
      </div>
    </section>
  );
};

export default FlashSales;
