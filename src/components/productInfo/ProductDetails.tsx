import useFetch from "@/hooks/useFetch";
import { Product } from "@/types/products";
import { ratingAndStars } from "@/utils/ratingAndStars";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  // const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState("");
  const [qty, setQty] = useState(2);

  const { data, isLoading, error } = useFetch({
    url: "products",
    params: id as string,
  });
  console.log(data, "single product");

  const product = data as Product;
  useEffect(() => {
    async function fetchproductById() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Unable to fetch data");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchproductById();
  }, [id]);

  if (isLoading) {
    return (
      <p className="text-center py-20 text-red-800 text-lg">
        Loading product...
      </p>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  if (!product && !isLoading) return <h2>NO Product found in id {id}</h2>;
  console.log(product.reviews);
  return (
    <div className="wrapper ">
      <p className="text-2xl font-medium text-green-600 flex  justify-end pt-10">
        FREE SHOPPING ON ORDER $50+
      </p>
      <div className="flex items-center gap-4 py-20">
        <Link href={"/"} className="text-[#BFBFBF] text-base font-medium">
          Account
        </Link>
        <span className="text-[#BFBFBF] text-base font-medium">/</span>
        <Link
          href={`/categories/${product?.category}`}
          className="text-[#BFBFBF] text-base font-medium capitalize"
        >
          {product?.category}
        </Link>
        <span className="text-[#BFBFBF] text-base font-medium">/</span>
        <p className="text-base font-medium capitalize">{product.title}</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className=" w-[171px] md:mx-0 mx-auto space-y-3">
          {product?.images?.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="p-2 bg-[#F5F5F5] rounded-sm flex justify-center items-center"
              role="button"
              onClick={() => setCurrentImage(image)}
            >
              <Image src={image} alt="gampad" width={20} height={20}/>
            </div>
          ))}
        </div>
        <div className="md:w-[500px] w-[300px] md:mx-0 mx-auto md:h-[600px] h-[450px]  bg-[#F5F5F5] pt-[154px] pb-[131px] px-[27px] rounded-sm md:mt-0 my-8">
          <Image
            src={currentImage || product?.thumbnail}
            alt="gamepad"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </div>
        {/* Product Details */}
        <div className="max-w-sm font-sans space-y-4 ">
          <h2 className="text-2xl font-semibold">{product?.title}</h2>
          <p>{product?.date}</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="text-yellow-400">{product.rating}</div>
            <span className="text-gray-400">(150 Reviews)</span>
            <span className="text-green-500">
              {" "}
              {product.stock} | In Stock::
            </span>
          </div>
          <p>Brand: {product.brand}</p>
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
            <p>{}</p>
          </div>

          <div className="border rounded p-4 space-y-3 text-sm w-[399px]">
            <div className="flex gap-3 items-start">
              <Image
                src="/images/DelivryIcon.svg"
                alt="delivryIcon"
                width={40}
                height={40}
                className="w-[26px]"
              />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-gray-500 w-[300px] p-1">
                  Enter your postal code for Delivery Availability
                </p>
                <p>{product.warrantyInformation}</p>
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
                <p className="text-gray-500">{product.returnPolicy}</p>
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

        {/* Reviews */}
        {product?.reviews?.map((review, index) => (
          <div
            key={`${review.comment}-${index}`}
            className="mb-6 last:mb-0 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Comment */}
            <p className="text-sm text-gray-800 leading-relaxed mb-4">
              “{review.comment}”
            </p>

            {/* Reviewer Info */}
            <div className="flex  justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/frank.jpeg"
                  alt={review.reviewerName}
                  width={11}
                  height={11}
                  className=" rounded-full object-cover ring-2 ring-gray-100"
                />
                <div className="flex flex-col">
                  <div className="flex  md:gap-5  items-center">
                    <span className="text-sm font-semibold text-gray-900">
                      {review.reviewerName}
                    </span>
                    <p className="flex">{ratingAndStars(review.rating)}</p>
                  </div>
                  <span className="text-xs text-gray-500">{formattedDate}</span>
                  <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                    {review.reviewerEmail}
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-400 ">
                two weeks ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
