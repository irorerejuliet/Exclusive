"use client";

import { useFavorite } from "@/hooks/useFavorite";
import ProductCard from "../products/ProductCard";
import useProduct from "@/hooks/useProduct";
import { Products } from "@/types/products";
import useProducts from "@/hooks/useProducts";



const WishlistsProducts = () => {
  const { status, error, products } = useProducts();

  if (status === "error") return <p>{error?.message}</p>;

  return (
    <section className="bg-[#FAFAFA] min-h-screen text-black">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Wishlist ({products?.length || 0})
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products?.map((product: Products) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistsProducts;
