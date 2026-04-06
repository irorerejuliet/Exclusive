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
    <section className="w-[352px] flex flex-col">
      {/* Card */}
      <div className="relative bg-[#F5F5F5] shadow rounded-t-xl p-4 flex flex-col">
        <button className="absolute top-3 left-3 bg-primary text-white py-1 px-2 rounded-md">
          {discount_percentage}
        </button>

        <p>{stock}</p>

        <div className="flex justify-center items-center my-6">
          <Link href={`/products/${id}`}>
            <Image src={thumbnail} alt={title} width={172} height={152} />
          </Link>
        </div>
      </div>
      
      <button className="w-full text-white bg-red-500 py-3 rounded-b-sm hover:bg-red-600 active:bg-red-700 transition-colors">
        Add to cart
      </button>
      <style>{`
  .test-hover-btn:hover {
    background-color: darkblue !important;
  }
`}</style>
      <button className="bg-blue-500 text-white px-6 py-3 test-hover-btn">
        TEST HOVER (plain CSS)
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
