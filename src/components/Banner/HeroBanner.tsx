"use client";
import { Bounce } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroImages = [
    "/images/iphone1.png",
    "/images/iphone17.png",
    "/images/iphone-12.png",
    "/images/iphone-18.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages]);

  return (
    <section className="relative overflow-hidden rounded-xl bg-linear-to-br from-black via-gray-900 to-black text-white px-5 sm:px-10 lg:px-20 py-12 lg:py-20">
     
      <div className="absolute w-52 sm:w-72 h-52 sm:h-72 bg-red-500/20 blur-3xl rounded-full top-0 left-0" />
      <div className="absolute w-52 sm:w-72 h-52 sm:h-72 bg-purple-500/20 blur-3xl rounded-full bottom-0 right-0" />

     
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="max-w-xl space-y-5 text-center lg:text-left lg:pt-0 pt-10">
          <span className="inline-block bg-red-600 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
            Limited Offer
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            iPhone Deals <br />
            <span className="text-red-500">Up to 10% Off</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base">
            Experience premium performance with exclusive discounts on the
            latest iPhones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Bounce>
              <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold shadow-lg w-full sm:w-auto">
                Shop Now
              </button>
            </Bounce>

            <Bounce>
              <Link href="/products">
                <button className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg w-full sm:w-auto">
                  Explore Deals
                </button>
              </Link>
            </Bounce>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center items-center mt-8 lg:mt-0">
          <div className="absolute w-52 sm:w-64 lg:w-72 h-52 sm:h-64 lg:h-72 bg-red-500/30 blur-2xl rounded-full" />

          <Image
            src={heroImages[activeIndex]}
            alt="hero"
            width={400}
            height={400}
            className="relative w-44 sm:w-64 lg:w-105 object-contain transition-all duration-700"
          />
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-3">
        {heroImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              activeIndex === index ? "bg-red-500 w-6" : "bg-gray-500 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
