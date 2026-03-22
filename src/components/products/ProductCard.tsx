import { formatCurrency } from "@/helper/formatCurrency";
import { Products } from "@/types/products";

import { ratingAndStars } from "@/utils/ratingAndStars";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Products;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
    <div className="">
      {/* Card */}
      <div className="relative bg-[#F5F5F5] shadow rounded-t-xl p-4">
        <button className="absolute top-3 left-3 bg-primary text-white py-1 px-2 rounded-md">
          {discount_percentage}
        </button>
        <p>{stock}</p>
        <div className="flex justify-center items-center my-6 ">
          <Link href={`/products/${id}`}>
            <Image src={thumbnail} alt={title} width={172} height={152} />
          </Link>
        </div>
      </div>
      <button className="text-white bg-primary py-3 px-36.75 rounded-t-none rounded-b-sm">
        Add to cart
      </button>
      {/* Product info below card */}
      <div className="mt-4 w-52.5 space-y-1 ">
        <p className="font-semibold text-base w-72  ">{title}</p>
        <p className="text-xs font-normal w-80 ">{description}</p>
        <p className="uppercase text-base font-semibold">{category}</p>
        <div className="flex items-center gap-1">
          <p className="text-black/50 line-through flex gap-4 font-medium">
            {formatCurrency(Number(price))}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          {/* <img src={stars} alt="rating" /> */}
          <div className="flex">{ratingAndStars(rating)}</div>
          <span className="text-gray-500">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
