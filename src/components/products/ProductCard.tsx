"use client";
import { formatCurrency } from "@/helper/formatCurrency";
import { useAddToCart } from "@/hooks/useCart";
import { Products } from "@/types/products";
import { ratingAndStars } from "@/utils/ratingAndStars";
import { FileHeart, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Products;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useAddToCart();
  const [liked, setLiked] = useState(false);

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
  } = product;

  return (
    <section className="group w-full max-w-[260px] flex flex-col">
      {/* CARD */}
      <div
        className="relative bg-gray-100 rounded-xl overflow-hidden 
      transition-all duration-300 group-hover:shadow-xl"
      >
        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
          -{discount_percentage}%
        </span>

        {/* Wishlist Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur 
          p-2 rounded-full shadow hover:bg-white transition"
        >
          {liked ? (
            <Heart className="text-red-500" />
          ) : (
            <FileHeart className="text-gray-700 hover:text-red-500" />
          )}
        </button>

        {/* Stock Badge */}
        <span className="absolute top-12 right-3 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
          {stock > 0 ? "In Stock" : "Out"}
        </span>

        {/* IMAGE */}
        <Link href={`/products/${id}`}>
          <div className="flex justify-center items-center h-[180px] p-4">
            <Image
              src={thumbnail}
              alt={title}
              width={160}
              height={160}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* ADD TO CART (HOVER) */}
        <button
          onClick={() =>
            addToCart({
              id: id.toString(),
              name: title,
              price: Number(price),
              image_url: thumbnail,
              description: description,
              quantity: 1,
            })
          }
          className="absolute bottom-0 left-0 w-full bg-black text-white py-3 
          translate-y-full group-hover:translate-y-0 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>

      {/* INFO */}
      <div className="mt-3 space-y-1 px-1">
        {/* CATEGORY */}
        <p className="text-xs uppercase text-gray-500 tracking-wide">
          {category}
        </p>

        {/* TITLE */}
        <p className="font-semibold text-sm line-clamp-1">{title}</p>

        {/* DESCRIPTION */}
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-bold text-black">
            {formatCurrency(Number(price))}
          </span>
          <span className="text-xs text-gray-400 line-through">
            {formatCurrency(Number(price) * 1.2)}
          </span>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex text-yellow-500">{ratingAndStars(rating)}</div>
          <span className="text-xs text-gray-500">({rating})</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
