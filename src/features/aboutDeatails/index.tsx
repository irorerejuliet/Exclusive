"use client";

import Activity from "./Activity";
import DeliveryService from "./DeliveryService";
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
