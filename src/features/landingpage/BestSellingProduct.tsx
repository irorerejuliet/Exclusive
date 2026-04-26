"use client";
import ProductCard from "@/components/products/ProductCard";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "@/hooks/useProducts";

const BestSellingProduct = () => {
  const { products, status } = useProducts();


  return (
    <section className="my-40 wrapper">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">This month</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Best Selling Products</h4>
        <button className="text-white bg-primary md:py-3 py-1 px-2 md:px-5 rounded-md md:w-39.75 w-20">
          View All
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 space-y-10 md:space-y-0 md:px-0 px-10">
        {status && [1, 2, 3, 4].map((_, i) => <CardSkeleton key={i} />)}
        {products?.slice(12, 16).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProduct;
