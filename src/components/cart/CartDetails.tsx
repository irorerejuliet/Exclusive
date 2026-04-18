"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

const CartDetails = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div>
      {cart.map((item: any) => (
        <div key={item.id} className="grid grid-cols-4 p-4">
          <div className="flex items-center gap-2">
            <Image src={item.image} alt="" width={50} height={50} />
            {item.name}
          </div>

          <div>${item.price}</div>

          <div className="flex gap-2">
            <button onClick={() => updateQuantity(item.id, "dec")}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, "inc")}>+</button>
          </div>

          <div>
            ${(item.price * item.quantity).toFixed(2)}
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;
