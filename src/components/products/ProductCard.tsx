import { formatCurrency } from "@/helper/formatCurrency";
import { Product } from "@/types/products";

import { ratingAndStars } from "@/utils/ratingAndStars";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, thumbnail, discountPercentage, title, price, rating } = product;
  return (
    <div className="w-[270px]">
      {/* Card */}
      <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
        <button className="absolute top-3 left-3 bg-primary text-white py-1 px-2 rounded-md">
          {discountPercentage}
        </button>
        <div className="flex justify-center items-center my-6 ">
          <Link href={`/products/${id}`}>
            <Image src={thumbnail} alt={title} width={172} height={152} />
          </Link>
        </div>
      </div>
      <button className="text-white bg-black w-[270px] py-2 rounded-t-none rounded-b-sm">
        Add to cart
      </button>
      {/* Product info below card */}
      <div className="mt-4 w-[210px]">
        <p className="font-semibold text-lg">{title}</p>
        <div className="flex items-center gap-1">
          <p className="text-black/50 line-through flex gap-4 font-medium">
            {formatCurrency(price)}
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
