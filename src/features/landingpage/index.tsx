"use client";

import MusicExperience from "@/features/landingpage/MusicExperience";
import BestSellingProduct from "./BestSellingProduct";
import Categories from "./Categories";
import FlashSales from "./FlashSales";
import Herosection from "./Herosection";
import ExploreOurProducts from "./ExploreOurProducts";
import NewArrival from "./NewArrival";
import DeliveryService from "../aboutDeatails/DeliveryService";

const HomePage = () => {
  return (
    <div className="bg-white text-black">
      <Herosection />
      <FlashSales />
      <Categories />
      <BestSellingProduct />
      <MusicExperience />
      <ExploreOurProducts />
      <NewArrival />
      <DeliveryService />
    </div>
  );
};

export default HomePage;
