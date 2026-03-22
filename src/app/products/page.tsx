"use client";

import ProductCard from "@/components/products/ProductCard";
import useProducts from "@/hooks/useProducts";

const Page = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white text-black text-xs py-20">
      <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10.25 space-y-10 md:space-y-0 md:px-0 px-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
