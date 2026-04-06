import Image from "next/image";
import Link from "next/link";


const CartDetails = () => {
  return (
    <section className="bg-white text-black">
      <div className="wrapper ">
        <div className="flex gap-2 items-center py-20 text-sm">
          <Link href={"/"}>Home</Link> /
          <Link href={"/cart"} className="font-medium">
            Cart
          </Link>
        </div>
        <div className="p-8 font-sans">
          {/* HEADER ROW */}
          <div className="grid grid-cols-4 font-semibold bg-gray-100 p-4 ">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* ITEM 1 */}
          <div className="grid grid-cols-4 items-center p-4 border-gray-100 shadow my-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/LCD Monitor.svg"
                alt="Monitor"
                width={16}
                height={16}
              />
              <span>LCD Monitor</span>
            </div>
            <div>$650</div>
            <div className="flex items-center gap-2 border rounded p-2 w-[58px]">
              <span>02</span>
              <div>
                <Image
                  src="/images/drop-up.svg"
                  alt="dropup"
                  width={50}
                  height={50}
                  className="ml-1"
                />
                <Image
                  src="/images/Drop-Down-Small.svg"
                  alt="dropdownArrrow"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div>$650</div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-4 items-center p-4 border border-gray-100 shadowl my-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/GamePad.svg"
                alt="Gamepad"
                width={50}
                height={50}
                className="w-16"
              />
              <span>H1 Gamepad</span>
            </div>
            <div>$550</div>
            <div className="flex items-center gap-2 border rounded p-2 w-[58px]">
              <span>02</span>
              <div>
                <Image
                  src="/images/drop-up.svg"
                  alt="drop"
                  width={50}
                  height={50}
                  className="ml-1"
                />
                <Image
                  src="/images/Drop-Down-Small.svg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
            </div>
            <div>$1100</div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between items-center gap-4 my-8">
            <button className="border border-gray-400 px-6 py-2 rounded">
              Return To Shop
            </button>
            <button className="border border-gray-200 px-6 py-2 rounded">
              Update Cart
            </button>
          </div>

          {/* COUPON */}
          <div className="flex justify-between">
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
                <span>$1750</span>
              </div>
              <div className="border boredr-b"></div>
              <div className="flex justify-between py-3">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="border boredr-b"></div>
              <div className="flex justify-between py-2 font-semibold">
                <span>Total:</span>
                <span>$1750</span>
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
