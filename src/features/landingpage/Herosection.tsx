"use client";

import CategoryProducts from "@/components/Banner/CategoryProducts";
import HeroBanner from "@/components/Banner/HeroBanner";


const Herosection = () => {
  return (
    <section className="bg-black lg:bg-white">
      <div className="py-5 lg:py-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 wrapper overflow-hidden px-4">
        <CategoryProducts />
        <HeroBanner />
      </div>
    </section>
  );
};

export default Herosection;


