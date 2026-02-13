"use client";

import CategoryProducts from "@/components/Banner/CategoryProducts";
import HeroBanner from "@/components/Banner/HeroBanner";


const Herosection = () => {
  return (
    <section className="bg-black lg:bg-white">
      <div className="py-10 flex gap-10  wrapper">
        <CategoryProducts/>
        <HeroBanner />
      </div>
    </section>
  );
};

export default Herosection;
