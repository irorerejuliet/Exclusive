"use client";

import { formatCurrency } from "@/helper/formatCurrency";
import { useAddToCart } from "@/hooks/useCart";
import { Products } from "@/types/products";
import { ratingAndStars } from "@/utils/ratingAndStars";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Products;
  variant?: "default" | "wishlist";
}

const ProductCard = ({ product, variant = "default" }: ProductCardProps) => {
  // Access the client
  const queryClient = useQueryClient();

  const addToCart = useAddToCart();
 const { mutate, isPending } = useMutation({
   mutationFn: async (productId: string) => {
     const res = await axios.post(`/api/wishlist`, { productId });
     return res.data;
   },

   onSuccess: (data) => {
     if (data?.success) {
       toast.success(
         data.action === "added"
           ? "Added to wishlist"
           : "Removed from wishlist",
       );

       queryClient.invalidateQueries({ queryKey: ["wishlist"] });
     }
   },
 });

  const {
    id,
    stock,
    thumbnail,
    discount_percentage,
    title,
    price,
    rating,
    description,
    category,
    isFavorite,
  } = product;
  console.log(isFavorite);
  return (
    <section className="group w-full max-w-65 flex flex-col">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-xl">
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
          -{discount_percentage}%
        </span>

        <button
          onClick={() => {
            mutate({
              productId: id,
              isFavorite,
            });
          }}
          disabled={isPending}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <span className="absolute top-12 right-3 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
          {stock > 0 ? "In Stock" : "Out"}
        </span>

        <Link href={`/products/${id}`}>
          <div className="flex justify-center items-center h-[180px] p-4">
            <Image
              src={thumbnail}
              alt={title}
              width={160}
              height={160}
              className="object-contain group-hover:scale-105 transition"
            />
          </div>
        </Link>

        <button
          onClick={() =>
            addToCart({
              id: id.toString(),
              name: title,
              price: Number(price),
              image_url: thumbnail,
              description,
              quantity: 1,
            })
          }
          className="absolute bottom-0 left-0 w-full bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition"
        >
          Add to Cart
        </button>
      </div>

      <div className="mt-3 space-y-1 px-1">
        <p className="text-xs uppercase text-gray-500">{category}</p>

        <p className="font-semibold text-sm line-clamp-1">{title}</p>

        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-bold">
            {formatCurrency(Number(price))}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex text-yellow-500">{ratingAndStars(rating)}</div>
          <span className="text-xs text-gray-500">({rating})</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
