"use client";

import ProductCard from "@/components/products/ProductCard";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "@/hooks/useProducts";
import Link from "next/link";

const Page = () => {
  const { products, loading } = useProducts();

  return (
    <div className="bg-white text-black text-xs py-20">
      <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10.25 space-y-10 md:space-y-0 md:px-0 px-10">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => <CardSkeleton key={i} />)
          : products?.slice(1,4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <div className="text-center mx-auto my-20">
        <Link
          href="/create-product"
          className="text-white bg-red-500 text-base font-medium px-10 py-4 rounded-md my-16 w-58.5 md:mx-0 mx-10 "
        >
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Page;
