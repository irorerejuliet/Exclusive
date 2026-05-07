import { User, Package, Heart, MapPin, Bell, HelpCircle } from "lucide-react";

export const sidebarLinks = [
  {
    name: "Manage My Account",
    icon: User,
    active: true,
  },
  {
    name: "My Orders",
    icon: Package,
    active: false,
  },
  {
    name: "My Wishlist",
    icon: Heart,
    active: false,
  },
  {
    name: "Addresses",
    icon: MapPin,
    active: false,
  },
  {
    name: "Notifications",
    icon: Bell,
    active: false,
  },
  {
    name: "Help Center",
    icon: HelpCircle,
    active: false,
  },
];
