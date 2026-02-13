"use client"
import Image from "next/image";
import { useState } from "react";

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroImages = [
    "/images/phone5.png",
    "/images/phone17.png",
    "/images/phone1.jpeg",
    "/images/iphone13.png",
    "/images/phone5.png",
  ];

  return (
    <div className="flex-1 bg-black w-[892px] text-white rounded-sm px-20 py-20 relative overflow-hidden lg:block hidden wrapper">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/AplleLogo.svg"
            alt="apple"
            width={50}
            height={50}
          />
          <p className="text-sm opacity-70">iPhone 14 Series</p>
        </div>

        <h1 className="text-5xl font-semibold leading-tight w-[298px]">
          Up to 10% off Voucher
        </h1>

        <button className="mt-10 flex items-center gap-2 border-b text-2xl">
          Shop now
          <Image
            src="/images/arrow-right.svg"
            alt="arrow-right"
            width={50}
            height={50}
          />
        </button>
      </div>

      <div className="">
        {/* Hero Image */}
        <Image
          src={heroImages[activeIndex]}
          alt="hero"
          width={450}
          height={450}
          className="absolute right-40 bottom-10  w-[450px]"
        />

        {/* Loading Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all
              ${activeIndex === index ? "bg-[#FF0000]" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
