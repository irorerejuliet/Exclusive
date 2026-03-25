import Image from "next/image";
import { wishlistData } from "../constant/wishlistData";

const WishlistsProducts = () => {
  return (
    <section className="bg-white text-black">
      <div className="py-28 wrapper">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">Wishlist (4)</p>
          <button className="text-base font-semibold py-3 px-10 border border-gray-400">
            Move All To Bag
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 my-10">
          {wishlistData.map(({ id, image, description, price, deleteBtn }) => (
            <div key={id} className="w-[270px]">
              <div className="relative bg-[#F5F5F5] pt-6  rounded-md">
                <Image
                  src={deleteBtn}
                  alt="deleteBtn"
                  width={7}
                  height={7}
                  className="absolute top-2 right-2  cursor-pointer"
                />
                <Image
                  src={image}
                  alt="image"
                  width={180}
                  height={179}
                  className="m-auto object-contain"
                />
                <button className="bg-black text-white flex justify-center items-center gap-2 w-full py-2 mt-4">
                  <Image
                    src="/images/Cart1.svg"
                    alt="cart"
                    width={5}
                    height={5}
                  />
                  Add to cart
                </button>
              </div>
              <div className="mt-3">
                <p className="font-medium text-lg">{description}</p>
                <span className="text-base font-medium text-primary">
                  {price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistsProducts;
