"use client";
import Activity from "./Activity";
import Founders from "./Founders";
import Stories from "./Stories";

const AboutUsPage = () => {
  return (
    <main className="bg-white text-black">
      <Stories />
      <Activity />
      <Founders />
    </main>
  );
};

export default AboutUsPage;
