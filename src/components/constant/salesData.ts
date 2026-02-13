import { SalesDaysAndTime, sidbarTypes } from "./types/sidebarTypes";

export const salesData: sidbarTypes[] = [
  {
    id: 1,
    percentage: -40,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/GamePad.svg",
    description: "HAVIT HV-G92 Gamepad",
    price: 400,
    discounted_price: 350,
    stars: "/images/Five star.svg",
    rating: 88,
  },
  {
    id: 2,
    percentage: -35,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/KeyBoard.svg",
    description: "AK-900 Wired Keyboard",
    price: 200,
    discounted_price: 150,
    stars: "/images/Five star.svg",
    rating: 75,
  },
  {
    id: 3,
    percentage: -30,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/GamingMonitor.svg",
    description: "IPS LCD Gaming Monitor",
    price: 130,
    discounted_price: 100,
    stars: "/images/Five star.svg",
    rating: 88,
  },
  {
    id: 4,
    percentage: -25,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/ComfortChair.svg",
    description: "S-Series Comfort Chair",
    price: 900,
    discounted_price: 0,
    stars: "/images/Five star.svg",
    rating: 88,
  },
];

export const salesTime: SalesDaysAndTime[] = [
  {
    id: 1,
    title: "Day",
    time: "03",
  },
  {
    id: 2,
    title: "Hour",
    time: "23",
  },
  {
    id: 3,
    title: "Minute",
    time: "19",
  },
  {
    id: 4,
    title: "Seconds",
    time: "56",
  },
];
