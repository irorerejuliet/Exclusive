"use client";
import CardSkeleton from "@/components/ui/CardSkeleton";
import useProducts from "../../hooks/useProducts";
import Image from "next/image";
import ProductCard from "@/components/products/ProductCard";

const ExploreOurProducts = () => {
  const { products, status, error } = useProducts();

  if(status == "error") {
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
    <div className="my-40 wrapper">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Our Products</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Explore our latest productProducts</h4>
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

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 space-y-10 md:space-y-0 md:px-0 px-10">
      
        {products?.slice(6, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ExploreOurProducts;
