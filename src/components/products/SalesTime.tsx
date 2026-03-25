"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

const SalesTime = () => {
  const [time, setTime] = useState(""); // ✅ start empty

  useEffect(() => {
    const updateTime = () => {
      setTime(dayjs().format("dddd, HH:mm:ss"));
    };

    updateTime(); // ✅ set immediately after mount

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:flex flex-row justify-between items-center py-8 md:px-0 px-10">
      <div className="md:flex flex-row items-center gap-20 md:space-y-0 space-y-10">
        <h2 className="text-3xl font-bold mb-4">Flash Sales</h2>

        <div className="flex gap-4 items-center">
          <p className="text-3xl font-bold">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesTime;
