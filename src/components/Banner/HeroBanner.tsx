"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const heroImages = [
    "/images/iphone1.png",
    "/images/iphone17.png",
    "/images/iphone13.png",
    "/images/iphone-18.png"
  ];

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden rounded-xl 
    bg-linear-to-br from-black via-gray-900 to-black text-white 
    px-6 py-12 sm:px-10 lg:px-20 lg:py-20 "
    >
      <div className="hidden lg:block">
        {/* 🔥 Background Glow Effects */}
        <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full top-0 left-0" />
        <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl rounded-full bottom-0 right-0" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
       
          <div className="max-w-lg space-y-5 text-center lg:text-left">
         
            <span className="inline-block bg-red-600 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
              Limited Offer
            </span>

           
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              iPhone Deals <br />
              <span className="text-red-500">Up to 10% Off</span>
            </h1>

            
            <p className="text-gray-300 text-sm sm:text-base">
              Experience premium performance with exclusive discounts on the
              latest iPhones.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
                Shop Now
              </button>

              <button className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg">
                Explore Deals
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center items-center">
            {/* Glow behind image */}
            <div className="absolute w-64 h-64 bg-red-500/30 blur-2xl rounded-full" />

            <Image
              src={heroImages[activeIndex]}
              alt="hero"
              width={400}
              height={400}
              className="relative w-52 sm:w-72 lg:w-105 object-contain transition-all duration-700"
            />
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-3">
          {heroImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full cursor-pointer transition-all
            ${activeIndex === index ? "bg-red-500 w-6" : "bg-gray-500 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;