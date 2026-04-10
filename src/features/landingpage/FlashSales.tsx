"use client";

import ProductCard from "@/components/products/ProductCard";
import SalesTime from "@/components/products/SalesTime";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "@/hooks/useProducts";

const FlashSales = () => {
  const { products, loading } = useProducts();

  return (
    <section className="bg-white text-black">
      <div className=" wrapper ">
        <div className="flex gap-4 items-center">
          <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
          <p className="text-primary text-base font-semibold">Today&apos;s</p>
        </div>
        <SalesTime />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 px-10 md:px-0">
          {loading
            ? [1, 2, 3, 4].map((_, i) => <CardSkeleton key={i} />)
            : products
                ?.slice(0, 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
        </div>
        <div className="text-center mx-auto">
          <button className="text-white bg-red-500 text-base font-medium px-10 py-4 rounded-md my-16 w-58.5 md:mx-0 mx-10 ">
            View All Products
          </button>
        </div>
        <div className="w-full border-t border-gray-200"></div>
      </div>
    </section>
  );
};

export default FlashSales;
