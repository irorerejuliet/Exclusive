import Image from "next/image";
import { justForYouData } from "../constant/wishlistData";


const JustForYou = () => {
  return (
    <div className="my-40">
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
          <p className=" text-2xl font-normal">Just For You</p>
        </div>
        <button className="text-white bg-primary md:py-3 py-1 px-2 md:px-5 rounded-md md:w-[159px] w-20">
          See All
        </button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 pt-10 justify-between items-center gap-10 space-y-10 md:space-y-0">
        {justForYouData.map(
          ({ id, quickVeiw, image, description, amount, stars, rating }) => (
            <div key={id} className="w-[270px] ">
              {/* Card */}
              <div className="relative bg-[#F5F5F5] shadow rounded-xl ">
                <div className="absolute top-3 right-3 flex flex-col gap-2 pt-6">
                  <Image src={quickVeiw} alt="quickview" width={6} height={6}/>
                </div>
                <div className="flex justify-center my-6">
                  <Image
                    src={image}
                    alt="GamePad"
                    width={170}
                    height={170}
                    className="m-auto object-contain"
                  />
                </div>
                <button className="bg-black text-white flex justify-center items-center gap-2 w-full py-2 mt-4">
                  <Image src="/images/Cart1.svg" alt="cart" width={5} height={5}/>
                  Add to cart
                </button>
              </div>
              {/* Product card detsails */}
              <div className="mt-4 w-[210px]">
                <p className="font-semibold text-lg">{description}</p>
                <p className="text-primary flex gap-4 font-medium">{amount}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Image src={stars} alt="rating" width={3} height={3}/>
                  <span className="text-gray-500">{rating}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default JustForYou



