import { wishlistTypes } from "./types/wishlistTypes";

export const wishlistData: wishlistTypes[] = [
  {
    id: 1,
    image: "/images/GucciBag.svg",
    description: "Gucci duffle bag",
    price: 400,
    deleteBtn: "/images/delete.svg",
  },
  {
    id: 2,
    image: "/images/LiquidCpuCooler.svg",
    description: "RGB liquid CPU Cooler",
    price: 1960,
    deleteBtn: "/images/delete.svg",
  },
  {
    id: 3,
    image: "/images/ShooterGamepad.svg",
    description: "GP11 Shooter USB Gamepad",
    price: 550,
    deleteBtn: "/images/delete.svg",
  },
  {
    id: 4,
    image: "/images/SatinJacket.svg",
    description: "Quilted Satin Jacket",
    price: 750,
    deleteBtn: "/images/delete.svg",
  },
];

export const justForYouData = [
  {
    id: 1,
    quickVeiw: "/images/Quick View.svg",
    image: "/images/GamingLaptop.svg",
    description: "ASUS FHD Gaming Laptop",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 65,
  },
  {
    id: 2,
    quickVeiw: "/images/Quick View.svg",
    image: "/images/GamingMonitor.svg",
    description: "IPS LCD Gaming Monitor",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 65,
  },
  {
    id: 3,
    quickVeiw: "/images/Quick View.svg",
    image: "/images/GamePad.svg",
    description: "RGB liquid CPU Cooler",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 75,
  },
  {
    id: 4,
    quickVeiw: "/images/Quick View.svg",
    image: "public/images/KeyBoard.svg",
    description: "AK-900 Wired Keyboard",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 75,
  },
];
