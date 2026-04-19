"use client";

import { useCartItems, useCartSubtotal } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

const CartDetails = () => {
  const cartItems = useCartItems();
  const subtotal = useCartSubtotal();

  return (
    <section className="bg-white text-black">
      <div className="wrapper">
        <div className="flex gap-2 items-center py-20 text-sm">
          <Link href="/">Home</Link> /
          <Link href="/cart" className="font-medium">
            Cart
          </Link>
        </div>

        <div className="p-8 font-sans">
          {/* HEADER */}
          <div className="grid grid-cols-4 font-semibold bg-gray-100 p-4">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* CART ITEMS */}
          {cartItems.length === 0 ? (
            <p className="py-10 text-center text-gray-500">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              
              <div
                key={item.id}
                className="grid grid-cols-4 items-center p-4 border-gray-100 shadow my-5"
              >
                {/* PRODUCT */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <span>{item.name}</span>
                </div>

                {/* PRICE */}
                <div>${item.price}</div>

                {/* QUANTITY */}
                <div className="flex items-center gap-2 border rounded p-2 w-[70px] justify-center">
                  <span>{item.quantity}</span>
                </div>

                {/* SUBTOTAL */}
                <div>${item.price * item.quantity}</div>
              </div>
            ))
          )}

          {/* BUTTONS */}
          <div className="flex justify-between items-center gap-4 my-8">
            <button className="border border-gray-400 px-6 py-2 rounded">
              Return To Shop
            </button>
            <button className="border border-gray-200 px-6 py-2 rounded">
              Update Cart
            </button>
          </div>

          {/* COUPON + TOTAL */}
          <div className="flex justify-between">
            {/* COUPON */}
            <div className="flex items-center gap-3 mb-10">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border p-2 w-64 rounded"
              />
              <button className="bg-primary text-white px-6 py-2 rounded">
                Apply Coupon
              </button>
            </div>

            {/* CART TOTAL */}
            <div className="border w-80 p-6 rounded mt-28">
              <h3 className="text-xl mb-4 font-semibold">Cart Total</h3>

              <div className="flex justify-between py-3">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>

              <div className="border border-b"></div>

              <div className="flex justify-between py-3">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className="border border-b"></div>

              <div className="flex justify-between py-2 font-semibold">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>

              <button className="bg-primary text-white w-full py-3 rounded mt-4">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
