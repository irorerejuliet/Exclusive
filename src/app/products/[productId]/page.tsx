"use client";

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
      <p className="text-center py-20 text-red-800 text-3xl font-bold">
        Loading product...
      </p>
    );
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!product && !status) return <h2>NO Product found in id {productId}</h2>;

  return (
    <section className="bg-white">
      <div className="wrapper ">
        <p className="text-2xl font-medium text-green-600 flex  justify-end pt-10">
          FREE SHOPPING ON ORDER $50+
        </p>

        <div className="flex items-center gap-4 py-20">
          <Link href={"/"} className="text-[#BFBFBF] text-base font-medium">
            Account
          </Link>
          <span className="text-[#BFBFBF] text-base font-medium">/ Home</span>
          <Link
            href={`/categories/${product?.category}`}
            className="text-[#BFBFBF] text-base font-medium capitalize"
          >
            {product?.category}
          </Link>
          <span className="text-[#000000] text-base font-medium">/</span>
          <p className="text-base font-medium capitalize">{product?.title}</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className=" w-42.75 md:mx-0 mx-auto space-y-3">
            {product?.images?.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="p-2 bg-[#F5F5F5] rounded-sm flex justify-center items-center"
                role="button"
                onClick={() => setCurrentImage(image)}
              >
                <Image src={image} alt="gampad" width={121} height={121} />
              </div>
            ))}
          </div>

          {/* <div className="md:w-125 w-75 md:mx-0 mx-auto md:h-150 h-112.5  bg-[#F5F5F5] pt-38.5 pb-32.75 px-6.75 rounded-sm md:mt-0 my-8">
            <Image
              src={product?.images[0] || currentImage}
              alt="gamepad"
              width={446}
              height={315}
              className="w-full h-full"
            />
          </div> */}

          {/* Replace the block at line 69-77 with this: */}

          <div className="md:w-125 w-75 md:mx-0 mx-auto md:h-150 h-112.5  bg-[#F5F5F5] pt-38.5 pb-32.75 px-6.75 rounded-sm md:mt-0 my-8">
            {product?.images?.[0] || currentImage ? (
              <Image
                src={currentImage || product?.images?.[0] || ""}
                alt={product?.title || "Product image"}
                width={446}
                height={315}
                className="w-full h-full object-contain"
                priority // Recommended for the main product image
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Loading image...
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="max-w-sm font-sans space-y-4 text-black px-4">
            <h2 className="text-2xl font-semibold">{product?.title}</h2>

            <div className="flex items-center gap-2 text-sm">
              <div className="text-yellow-400">{product?.rating}</div>
              <span className="text-gray-400">(150 Reviews)</span>
              <span className="text-green-500">
                {product?.stock} | In Stock::
              </span>
            </div>

            <p>Brand: {product?.brand}</p>
            <p className="text-2xl font-medium">${product?.price}</p>

            <p className="md:text-sm text-xs font-medium">
              {product?.description}
            </p>

            <hr />

            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded">
                <button
                  className="px-3 border"
                  onClick={() => setQty((q) => q - 1)}
                >
                  -
                </button>
                <span className="px-4">{qty}</span>
                <button
                  className="px-3 bg-red-400  text-white"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button className="flex-1 border-secondary bg-red-400 text-white py-2 rounded">
                Buy Now
              </button>

              <button className="border rounded p-2">
                <Heart size={18} />
              </button>
            </div>

            <div className="border rounded p-4 space-y-3 text-sm lg:w-99.75">
              <div className="flex gap-3 items-start">
                <Image
                  src="/images/DelivryIcon.svg"
                  alt="delivryIcon"
                  width={40}
                  height={40}
                  className="w-6.5"
                />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-gray-500 w-75 p-1">
                    Enter your postal code for Delivery Availability
                  </p>
                  <p>{product?.warranty_information}</p>
                </div>
              </div>

              <hr />

              <div className="flex gap-3 items-start">
                <span>
                  <Image
                    src="/images/ReturnIcon.svg"
                    alt="returnIcon"
                    width={26}
                    height={26}
                  />
                </span>
                <div>
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-gray-500">{product?.return_policy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b mt-10"></div>

        <div className="w-full mt-20 rounded-lg border border-red-200 bg-white shadow-md p-6">
          <h3 className="text-2xl font-semibold text-red-700 mb-6 border-b border-red-100 pb-2">
            Customer Reviews
          </h3>

          {/* Reviews mapping (currently disabled) */}
          {/*
          {product?.reviews?.map((review, index) => (
            <div key={`${review.comment}-${index}`}>
              <p>{review.comment}</p>
            </div>
          ))}
          */}
        </div>
      </div>
    </section>
  );
};

export default Page;
