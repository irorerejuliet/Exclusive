"use client";

import { deliveryData } from "@/components/constant/deliveryData";
import Image from "next/image";

const DeliveryService = () => {
  return (
    <div className="my-40 md:flex flex-row justify-center gap-60 items-center">
      {deliveryData?.map(({ id, image, title, description }) => (
        <div
          key={id}
          className="flex flex-col items-center text-center md:py-0 py-5"
        >
          <div className="w-16 h-16 rounded-full bg-[#C1C0C1] p-1 flex items-center justify-center">
            <Image
              src={image}
              alt="delivery-service"
              width={12}
              height={12}
              className=" rounded-full p-2 bg-black"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">{title}</h3>
          <p className="text-sm font-normal">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default DeliveryService;
