"use client";

import CardSkeleton from "@/components/ui/CardSkeleton";
import useCategoryProducts from "@/hooks/useCategoryProducts";
import Image from "next/image";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const params = useParams();

  const categoryId = params.categoryId as string;

  const { products, status, error } = useCategoryProducts(categoryId);

 if (status === "pending") {
   return (
     <section className="bg-white min-h-screen py-32">
       <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
         {[...Array(8)].map((_, index) => (
           <CardSkeleton key={index} />
         ))}
       </div>
     </section>
   );
 }
  if (status === "error") {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg font-medium">
          {error instanceof Error ? error.message : "Something went wrong"}
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white text-black min-h-screen py-32">
      <div className="wrapper">
        <div className="mb-14">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Category Products
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Explore premium products curated for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative bg-gray-100 h-72 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={230}
                  height={230}
                  className="object-contain group-hover:scale-105 transition duration-300"
                />

                {/* DISCOUNT */}
                {product.discount_percentage > 0 && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    -{Math.round(product.discount_percentage)}%
                  </span>
                )}

                {/* STOCK */}
                <span
                  className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full ${
                    product.stock > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-4">
                {/* CATEGORY */}
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {product.category}
                </p>

                {/* TITLE */}
                <h2 className="text-lg font-semibold line-clamp-1">
                  {product.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-500 line-clamp-2 leading-6">
                  {product.description}
                </p>

                {/* TAGS */}
                {product.tags && (
                  <div className="flex flex-wrap gap-2">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* PRICE + RATING */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <p className="text-2xl font-bold">${product.price}</p>

                    {product.brand && (
                      <p className="text-xs text-gray-400 mt-1">
                        Brand: {product.brand}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-full">
                    <span>⭐</span>
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <p>SKU: {product.sku}</p>

                  <p>{new Date(product.created_at).toDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
