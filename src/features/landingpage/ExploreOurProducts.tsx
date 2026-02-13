"use client";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "../../hooks/useProducts";
import { shuffleArray } from "../../utils/shuffleArray";
import Image from "next/image";
import ProductCard from "@/components/products/ProductCard";

const ExploreOurProducts = () => {
  const { data, loading } = useProducts();
  const products =
    data?.products && data?.products?.length > 0
      ? shuffleArray(data?.products)
      : [];

  return (
    <div className="my-40 wrapper">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Our Products</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Explore Our Products</h4>
        <div className="flex gap-3 md:py-0 py-5">
          <Image
            src="/images/icons_arrow-left.svg"
            alt="arrow-left"
            width={4}
            height={4}
            className="shadow rounded-full p-1 border border-gray-100"
          />
          <Image
            src="/images/icon-arrow-right.svg"
            alt="arrow-right"
            width={4}
            height={4}
            className="shadow rounded-full p-2 border border-gray-100"
          />
        </div>
      </div>

      <div className="flex-row md:flex justify-between items-center gap-10 space-y-10 md:space-y-0 md:px-0 px-10">
        {loading && [1, 2, 3, 4].map((_, i) => <CardSkeleton key={i} />)}
        {products &&
          !loading &&
          products
            .slice(1, 5)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ExploreOurProducts;
