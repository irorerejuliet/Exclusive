"use client"
import { formatCurrency } from "@/helper/formatCurrency";
import { useAddToCart } from "@/hooks/useCart";
import { Products } from "@/types/products";
import { ratingAndStars } from "@/utils/ratingAndStars";
import Image from "next/image";
import Link from "next/link";
import { log } from "node:console";


interface ProductCardProps {
  product: Products;
}

const ProductCard = ({ product }: ProductCardProps) => {
const addToCart = useAddToCart();
   
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
    <section className="w-88 flex flex-col">
      {/* Card */}
      <div className="relative bg-[#F5F5F5] shadow rounded-t-xl p-4 flex flex-col">
        <button className="absolute top-3 left-3 bg-primary text-white py-1 px-2 rounded-md">
          {discount_percentage}
        </button>

        <p>{stock}</p>

        <div className="flex justify-center items-center my-6">
          <Link href={`/products/${id}`}>
            <Image
              src={thumbnail}
              alt={title}
              width={172}
              height={152}
              style={{ width: "auto", height: "auto" }}
              priority={true}
            />
          </Link>
        </div>
      </div>

      {/* <button
        type="button"
        className="w-full text-white bg-primary cursor-pointer rounded-b-sm hover:bg-blue-700! p-3"
      >
        Add to cart
      </button> */}
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
        className="bg-black text-white px-4 py-2 mt-2"
      >
        Add to Cart
      </button>
      {/* Product info */}
      <div className="mt-4 space-y-1">
        <p className="font-semibold text-base">{title}</p>
        <p className="text-xs font-normal">{description}</p>
        <p className="uppercase text-base font-semibold">{category}</p>

        <p className="text-black/50 line-through font-medium">
          {formatCurrency(Number(price))}
        </p>

        <div className="flex items-center gap-2 mt-1">
          <div className="flex">{ratingAndStars(rating)}</div>
          <span className="text-gray-500">{rating}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
