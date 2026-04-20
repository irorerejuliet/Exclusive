"use client";

import Reviews from "@/components/products/Reviews";
import useProduct from "@/hooks/useProduct";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const { productId } = useParams<{ productId: string }>();
  console.log(productId, "prod");
  const [currentImage, setCurrentImage] = useState("");
  const [qty, setQty] = useState(2);

  const { product, status, error } = useProduct();
  console.log(product, "single product");

  if (status === "error") {
    return (
      <p className="text-center py-20 text-red-600 text-2xl font-semibold">
        Loading product...
      </p>
    );
  }

  if (error) {
    return <h1 className="text-center py-10 text-red-600">{error.message}</h1>;
  }

  if (!product && !status)
    return (
      <h2 className="text-center py-10">NO Product found in id {productId}</h2>
    );

  return (
    <section className="bg-white">
      <div className="wrapper px-4 md:px-0">
        {/* TOP MESSAGE */}
        <p className="text-green-600 text-sm md:text-base font-medium text-right pt-6 md:pt-10">
          FREE SHIPPING ON ORDER $50+
        </p>

        {/* BREADCRUMB */}
        <div className="flex flex-wrap items-center gap-2 py-6 md:py-10 text-sm md:text-base text-gray-500">
          <Link href="/acount">Account</Link>
          <span>/</span>
          <Link href={"/"}>Home</Link>
          <span>/</span>
          <Link
            href={`/categories/${product?.category}`}
            className="capitalize hover:text-black"
          >
            {product?.category}
          </Link>
          <span>/</span>
          <p className="text-black font-medium capitalize">{product?.title}</p>
        </div>

        {/* MAIN GRID */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* THUMBNAILS */}
          <div className="flex lg:flex-col gap-3 lg:w-[120px] mx-auto lg:mx-0">
            {product?.images?.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="bg-gray-100 rounded-md p-2 cursor-pointer hover:shadow-md transition"
                onClick={() => setCurrentImage(image)}
              >
                <Image
                  src={image}
                  alt="product"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1 bg-gray-100 rounded-xl flex items-center justify-center p-6 ">
            {product?.images?.[0] || currentImage ? (
              <Image
                src={currentImage || product?.images?.[0] || ""}
                alt={product?.title || "Product image"}
                width={500}
                height={400}
                className="w-full h-full object-contain"
                priority
              />
            ) : (
              <div className="text-gray-400">Loading image...</div>
            )}
          </div>

          {/* DETAILS */}
          <div className="lg:w-[420px] space-y-5 text-black">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              {product?.title}
            </h2>

            <div className="flex items-center gap-3 text-sm">
              <span className="text-yellow-500 font-medium">
                {product?.rating}
              </span>
              <span className="text-gray-400">(150 Reviews)</span>
              <span className="text-green-600 font-medium">
                {product?.stock} in stock
              </span>
            </div>

            <p className="text-gray-600 text-sm">
              Brand: <span className="font-medium">{product?.brand}</span>
            </p>

            <p className="text-3xl font-semibold text-black">
              ${product?.price}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product?.description}
            </p>

            <hr />

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {/* QTY */}
              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                  onClick={() => setQty((q) => q - 1)}
                >
                  -
                </button>
                <span className="px-4">{qty}</span>
                <button
                  className="px-3 py-2 bg-red-500 text-white hover:bg-red-600"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>

              {/* BUY */}
              <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-medium transition">
                Buy Now
              </button>

              {/* WISHLIST */}
              <button className="border rounded-md p-2 hover:bg-gray-100 transition">
                <Heart size={18} />
              </button>
            </div>

            {/* INFO CARDS */}
            <div className="border rounded-lg p-4 space-y-4 text-sm bg-gray-50">
              <div className="flex gap-3">
                <Image
                  src="/images/DelivryIcon.svg"
                  alt="delivery"
                  width={30}
                  height={30}
                />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-gray-500 text-xs">
                    Enter postal code for availability
                  </p>
                  <p className="text-xs mt-1">
                    {product?.warranty_information}
                  </p>
                </div>
              </div>

              <hr />

              <div className="flex gap-3">
                <Image
                  src="/images/ReturnIcon.svg"
                  alt="return"
                  width={26}
                  height={26}
                />
                <div>
                  <p className="font-medium">Return Policy</p>
                  <p className="text-gray-500 text-xs">
                    {product?.return_policy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

   <Reviews/>
      </div>
    </section>
  );
};

export default Page;
