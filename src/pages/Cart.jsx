import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  decrementQty,
  deleteItem,
  incrementQty,
  resetCart,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets";
import toast from "react-hot-toast";

const Cart = () => {
  const despatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [products]);
  return (
    <div className="pt-14 pb-4 px-4 w-full">
      {products.length > 0 ? (
        <div className="container mx-auto grid grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="font-titleFont flex items-center justify-between py-3 border-b-[1px] border-b-gray-400">
              <h2 className="font-medium text-3xl">Shopping Cart</h2>
              <h4 className="font-normal text-xl">Subtotal</h4>
            </div>
            <div>
              {products.map((item) => (
                <div
                  className="w-full border-b-[1px] border-b-gray-300 flex items-center gap-6 p-4"
                  key={item.id}
                >
                  <div className="w-1/5">
                    <img
                      src={item.image}
                      alt="product-img"
                      className="w-full h-44 object-contain"
                    />
                  </div>
                  <div className="w-4/5">
                    <h2 className="font-semibold text-xl">{item.title}</h2>
                    <p className="text-sm pr-10">
                      {item.description.substring(0, 200)}...
                    </p>
                    <p className="text-base mt-1 flex gap-2">
                      unit price:{" "}
                      <span className="font-semibold">
                        {" "}
                        ${item.price.toFixed(2)}
                      </span>
                    </p>
                    <div className="w-28 mt-1 flex items-center justify-center text-center gap-2 py-1 px-1 bg-[#F0F2F2] drop-shadow-lg rounded-md">
                      <p className="">Qty: </p>
                      <p
                        className="bg-gray-200 cursor-pointer px-1.5 rounded-md hover:bg-gray-400 duration-300"
                        onClick={() => despatch(decrementQty(item.id))}
                      >
                        -
                      </p>
                      <p className="font-medium">{item.quantity}</p>
                      <p
                        className="bg-gray-200 cursor-pointer px-1.5 rounded-md hover:bg-gray-400 duration-300"
                        onClick={() => despatch(incrementQty(item.id))}
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        despatch(deleteItem(item.id)) &&
                        toast.error(
                          `${item?.title.substring(
                            0,
                            15
                          )} deleted successfully!`
                        )
                      }
                      className="bg-red-500 rounded-lg mt-2 py-1 w-36 text-white hover:bg-red-700 active:bg-red-900 duration-200"
                    >
                      Delete item
                    </button>
                  </div>
                  <div>
                    <p className="font-titleFont font-semibold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {products.length > 0 && (
              <div className="w-full py-4">
                <button
                  onClick={() => despatch(resetCart())}
                  className="bg-red-500 rounded-lg px-10 py-2  text-white hover:bg-red-700 active:bg-red-900 font-titleFont font-semibold text-lg tracking-wide duration-200"
                >
                  Clear cart
                </button>
              </div>
            )}
          </div>
          <div className="w-full h-52 p-4 flex flex-col justify-center items-center  bg-white col-span-1">
            <div className="">
              <p className="flex items-start gap-2 text-sm">
                <span className="bg-white text-green-500 rounded-full text-xl">
                  <FaCircleCheck />
                </span>
                Your order qualifies for Free Shipping Choose this option at
                checkout. see details...
              </p>
            </div>
            <div className="">
              <p className="font-semibold px-10 py-1 flex gap-2 items-center justify-center">
                Total:
                <span className="text-lg font-bold">${totalPrice}</span>
              </p>
            </div>
            <button className="button">Proceed To Pay</button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full py-10 flex items-center justify-center gap-4"
        >
          <div className="">
            <img
              src={emptyCart}
              alt="empty-Cart-img"
              className="w-80 p-4 rounded-lg mx-auto"
            />
          </div>
          <div className="w-96 bg-white flex flex-col items-center p-4 rounded-md shadow-lg">
            <h2 className="font-titleFont text-xl font-bold">
              Your cart feels lonley.{" "}
            </h2>
            <p className="text-sm text-center">
              Your shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link
              to={"/"}
              className="mt-6 px-8 py-2 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700 rounded-md text-lg font-titleFont font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
