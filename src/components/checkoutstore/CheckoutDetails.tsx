"use client";

import { useCartItems, useCartSubtotal } from "@/hooks/useCart";
import Image from "next/image";

const CheckoutDetails = () => {
  const cartItems = useCartItems();
  const subtotal = useCartSubtotal();

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-20 text-gray-900">
      <div className="wrapper mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE - FORM */}
        <div className="bg-white/80 backdrop-blur border border-gray-200 p-8 rounded-2xl shadow-lg space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight">Checkout</h2>

          {/* CUSTOMER INFO */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Customer Information
            </h3>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
              />
            </div>
          </div>

          {/* SHIPPING */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Shipping Address
            </h3>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-wide text-gray-500">
              Payment Method
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <button className="border border-gray-300 hover:border-black hover:bg-black hover:text-white transition py-3 rounded-lg font-medium">
                Card
              </button>
              <button className="border border-gray-300 hover:border-black hover:bg-black hover:text-white transition py-3 rounded-lg font-medium">
                Pay on Delivery
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <button className="bg-black hover:bg-gray-800 transition text-white w-full py-4 rounded-lg font-semibold tracking-wide shadow-md">
            Place Order
          </button>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg h-fit sticky top-10">
          <h3 className="text-2xl font-semibold mb-6">Order Summary</h3>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">No items in cart</p>
          ) : (
            <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center border-b pb-4"
                >
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-lg border"
                  />

                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          )}

          <hr className="my-6" />

          {/* TOTAL */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between font-semibold text-lg pt-3 border-t">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutDetails;
