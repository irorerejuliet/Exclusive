"use client";

import { useCartItems, useCartSubtotal, useRemoveFromCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

const CartDetails = () => {
  const cartItems = useCartItems();
  const subtotal = useCartSubtotal();
  const removeFromCart = useRemoveFromCart();

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  return (
    <section className="bg-white text-black min-h-screen py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* BREADCRUMB */}
        <div className="flex gap-2 items-center py-8 text-sm text-gray-600">
          <Link href="/">Home</Link> /
          <Link href="/cart" className="font-medium text-black">
            Cart
          </Link>
        </div>

        <div className="border rounded-xl p-4 md:p-6 shadow-sm">
          {/* DESKTOP HEADER */}
          <div className="hidden md:grid grid-cols-5 font-semibold bg-gray-100 p-4 rounded-lg text-sm">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
            <div>Action</div>
          </div>

          {/* CART ITEMS */}
          {cartItems.length === 0 ? (
            <p className="py-16 text-center text-gray-500">
              Your cart is empty
            </p>
          ) : (
            <div className="flex flex-col gap-4 mt-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 md:p-0 md:border-b md:rounded-none"
                >
                  {/* MOBILE CARD LAYOUT */}
                  <div className="md:hidden flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded"
                      />
                      <p className="font-medium">{item.name}</p>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price</span>
                      <span>${item.price}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Quantity</span>
                      <span>{item.quantity}</span>
                    </div>

                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-500">Subtotal</span>
                      <span>${item.price * item.quantity}</span>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 border border-red-200 py-2 rounded"
                    >
                      Remove
                    </button>
                  </div>

                  {/* DESKTOP ROW */}
                  <div className="hidden md:grid grid-cols-5 items-center p-4 gap-4">
                    {/* PRODUCT */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <span>{item.name}</span>
                    </div>

                    {/* PRICE */}
                    <div>${item.price}</div>

                    {/* QUANTITY */}
                    <div>{item.quantity}</div>

                    {/* SUBTOTAL */}
                    <div>${item.price * item.quantity}</div>

                    {/* ACTION */}
                    <div>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 border border-red-200 px-3 py-1 rounded hover:bg-red-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8">
            <button className="border border-gray-400 px-6 py-2 rounded w-full md:w-auto">
              Return To Shop
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded w-full md:w-auto">
              Update Cart
            </button>
          </div>

          {/* COUPON + TOTAL */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* COUPON */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border p-2 w-full md:w-64 rounded"
              />
              <button className="bg-black text-white px-6 py-2 rounded">
                Apply
              </button>
            </div>

            {/* TOTAL */}
            <div className="border w-full md:w-80 p-6 rounded-lg">
              <h3 className="text-xl mb-4 font-semibold">Cart Total</h3>

              <div className="flex justify-between py-2">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>

              <div className="border-b my-2"></div>

              <div className="flex justify-between py-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className="border-b my-2"></div>

              <div className="flex justify-between py-2 font-bold">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>

              <button className="bg-black text-white w-full py-3 rounded mt-4">
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
