"use client";




import { wishlistData } from "../constant/wishlistData";



 
const WishlistsProducts = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Wishlist ({wishlistData.length})
          </h2>

          <button className="hidden md:block px-6 py-3 border rounded-full hover:bg-black hover:text-white transition">
            Move All To Bag
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {/* {wishlistData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default WishlistsProducts;
