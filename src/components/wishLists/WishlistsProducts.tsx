"use client";


import ProductCard from "../products/ProductCard";
import useWishlist from "@/hooks/useWishlist";

const WishlistsProducts = () => {
  

  const {wishlists, error, status} =  useWishlist();

  return (
    <section className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-2xl font-semibold">Wishlist ({wishlists.length})</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {wishlists.map((item: any) => (
            <ProductCard
              key={item.products.id}
              product={item.products}
              variant="wishlist"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistsProducts;
