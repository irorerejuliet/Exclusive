import { salesData } from "../constant/salesData";
import Image from "next/image";
import { formatCurrency } from "@/helper/formatCurrency";

const Details = () => {
  return (
    <div className="my-40 wrapper">
      <div className="flex gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px] md:ml-0 ml-4"></div>
        <p className="text-primary text-base font-semibold ">Related item</p>
      </div>
      <div className="flex-row md:flex justify-between items-center gap-10 space-y-10 md:space-y-0 md:px-0 px-10">
        {salesData.map(
          ({
            id,
            percentage,
            heart,
            quickVeiw,
            gamepad,
            description,
            price,
            stars,
            rating,
            discounted_price,
          }) => (
            <div key={id} className="w-[270px] ">
              {/* Card */}
              <div className="relative bg-[#F5F5F5] shadow rounded-xl p-4">
                <button className="absolute top-3 left-3 bg-primary text-white py-1 px-2 rounded-md">
                  {percentage}
                </button>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <Image src={heart} alt="heart" width={12} height={12}/>
                  <Image src={quickVeiw} alt="quickview" width={12} height={12}/>
                </div>
                <div className="flex justify-center my-6">
                  <Image src={gamepad} alt="GamePad" width={24} height={24} className="h-24 w-auto" />
                </div>
              </div>
              {id === 2 && (
                <button className="text-white bg-black w-[270px] py-2 rounded-t-none rounded-b-sm">
                  Add to cart{" "}
                </button>
              )}
              {/* Product info below card */}
              <div className="mt-4 w-[210px]">
                <p className="font-semibold text-lg">{description}</p>
                <div className="flex items-center gap-1">
                  <p className="text-primary flex gap-4 font-medium">
                    {discounted_price > 0
                      ? formatCurrency(discounted_price)
                      : formatCurrency(price)}
                  </p>
                  {discounted_price > 0 && (
                    <p className="text-black/50 line-through flex gap-4 font-medium">
                      {formatCurrency(price)}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Image src={stars} alt="rating" width={12} height={12}/>
                  <span className="text-gray-500">{rating}</span>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      <button className="text-white bg-secondary text-base font-medium px-10 py-4 rounded-md my-16 w-[234px] md:mx-0 mx-10">
        View All Products
      </button>
      <div className="w-full border-t border-gray-200"></div>
    </div>
  );
};

export default Details;
