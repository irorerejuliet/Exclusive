import React from "react";
import type { Product } from "@/types/products";

type Props = {
  product: Product | null;
};

const ProductReveiws = ({ product }: Props) => {
  return (
    <div className="w-[600px] mt-20 rounded-lg border border-red-200 bg-white shadow-md p-6">
      <h3 className="text-2xl font-semibold text-red-700 mb-6 border-b border-red-100 pb-2">
        Customer Reviews
      </h3>

      {/* Reviews */}
      {product?.reviews?.map((review, i) => (
        <div
          key={`${review.rating}-${i}`}
          className="mb-6 last:mb-0 border-b border-gray-100 pb-4"
        >
          {/* Comment */}
          <p className="text-sm text-gray-800 leading-relaxed mb-3">
            {review.comment}
          </p>

          {/* Meta info */}
          <div className="flex flex-col gap-1 text-xs text-gray-500">
            <span>{review.date}</span>
            <span className="font-medium text-gray-700">
              {review.reviewerName}
            </span>
            <span className="text-blue-700">{review.reviewerEmail}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReveiws;
