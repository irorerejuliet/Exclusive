"use client";
import DeliveryService from "../landingpage/DeliveryService";
import Activity from "./Activity";
import Founders from "./Founders";
import Stories from "./Stories";

const AboutUsPage = () => {
  return (
    <main className="bg-white text-black">
      <Stories />
      <Activity />
      <Founders />
      <DeliveryService/>
    </main>
  );
};

export default AboutUsPage;
