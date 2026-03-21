"use client";



import ProductCard from "@/components/products/ProductCard";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";

const Categories = () => {
  const { products, loading } = useProducts();


  return (
    <section className="bg-white text-black wrapper">
      <div className="wrapper ">
        <div className="flex  gap-4 items-center">
          <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
          <p className="text-primary text-base font-semibold">Today&apos;s</p>
        </div>
        <div className="flex justify-between  items-center mb-7">
          <h4 className="md:text-3xl font-semibold">Browse By Category</h4>
          <div className="flex gap-3 md:py-0 py-5">
            <Image
              src="/images/icons_arrow-left.svg"
              alt="arrow-left"
              width={40}
              height={40}
              className="shadow rounded-full p-1 border border-gray-100"
            />
            <Image
              src="/images/icon-arrow-right.svg"
              alt="arrow-right"
              width={40}
              height={40}
              className="shadow rounded-full p-2 border border-gray-100"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 items-center space-y-10 md:space-y-0 md:px-0 px-10">
          {loading && [1, 2, 3, 4].map((_, i) => <CardSkeleton key={i} />)}
          {products?.slice(6, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="w-full border-t border-gray-200 mt-20"></div>
      </div>
    </section>
  );
};

export default Categories;
