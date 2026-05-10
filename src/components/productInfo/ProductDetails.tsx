"use client";

import useFetch from "@/hooks/useFetch";
import { Products } from "@/types/products";
import { ratingAndStars } from "@/utils/ratingAndStars";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [currentImage, setCurrentImage] = useState("");
  const [qty, setQty] = useState(1);

 const { data, isLoading, error } = useFetch({
   queryKey: ["product", id],
   url: `products/${id}`,
 });

  const product = data as Products;

  // Loading state
  if (isLoading) {
    return (
      <p className="text-center py-20 text-red-800 text-lg">
        Loading product...
      </p>
    );
  }

  // Error state
  if (error) {
    return <h1 className="text-center text-red-500">{error.message}</h1>;
  }

  // No product
  if (!product) {
    return <h2 className="text-center py-20">No Product found with id {id}</h2>;
  }

  return (
    <div className="wrapper">
      {/* Top Notice */}
      <p className="text-2xl font-medium text-green-600 flex justify-end pt-10">
        FREE SHIPPING ON ORDER $50+
      </p>

      {/* Breadcrumb */}
      <div className="flex items-center gap-4 py-10">
        <Link href="/" className="text-gray-400">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${product.category}`}
          className="text-gray-400 capitalize"
        >
          {product.category}
        </Link>
        <span>/</span>
        <p className="capitalize">{product.title}</p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Thumbnail Images */}
        <div className="w-[120px] space-y-3 mx-auto md:mx-0">
          {product.images?.map((image, index) => (
            <div
              key={index}
              className="p-2 bg-gray-100 cursor-pointer"
              onClick={() => setCurrentImage(image)}
            >
              <Image
                src={image}
                alt="product"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="md:w-[500px] w-full h-[400px] bg-gray-100 p-4">
          <Image
            src={currentImage || product.thumbnail}
            alt={product.title}
            width={500}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-semibold">{product.title}</h2>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500">
              {ratingAndStars(product.rating)}
            </span>
            <span className="text-gray-400 text-sm">(Reviews)</span>
            <span className="text-green-500 text-sm">
              {product.stock} in stock
            </span>
          </div>

          <p>Brand: {product.brand}</p>

          <p className="text-2xl font-bold">${product.price}</p>

          <p className="text-sm text-gray-600">{product.description}</p>

          <hr />

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <div className="flex border rounded">
              <button
                className="px-3"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                className="px-3 bg-red-500 text-white"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-red-500 text-white py-2 rounded">
              Buy Now
            </button>

            <button className="border p-2 rounded">
              <Heart size={18} />
            </button>
          </div>

          {/* Extra Info */}
          <div className="border p-4 space-y-3 text-sm">
            <div>
              <p className="font-medium">Free Delivery</p>
              <p className="text-gray-500">
                Enter your postal code for availability
              </p>
              <p>{product.warranty_information}</p>
            </div>

            <hr />

            <div>
              <p className="font-medium">Return Policy</p>
              <p className="text-gray-500">{product.return_policy}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section
      <div className="mt-16 border p-6 rounded">
        <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>

        {product.reviews?.length === 0 && <p>No reviews yet.</p>}

        {product.reviews?.map((review, index) => {
          const formattedDate = new Date(review.date).toLocaleDateString();

          return (
            <div key={index} className="mb-6 border p-4 rounded">
              <p className="mb-2">“{review.comment}”</p>

              <div className="flex justify-between text-sm text-gray-600">
                <div>
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p>{ratingAndStars(review.rating)}</p>
                  <p>{formattedDate}</p>
                  <p className="text-blue-500">{review.reviewerEmail}</p>
                </div>

                <span>Verified</span>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ProductDetails;
