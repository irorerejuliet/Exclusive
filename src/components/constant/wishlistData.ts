import { wishlistTypes } from "./types/wishlistTypes";


export const wishlistData: wishlistTypes[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 120,
    rating: 4.5,
    stock: 10,
    brand: "juliet",
    description: "High quality sound with noise cancellation",
    category: "electronics",
    thumbnail: "/headphones.png",
    discount_percentage: 20,
    created_at: "2026-01-01",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 200,
    rating: 4.2,
    stock: 5,
    brand: "juliet",
    description: "Track your fitness and notifications",
    category: "wearables",
    thumbnail: "/watch.png",
    discount_percentage: 15,
    created_at: "2026-01-02",
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
