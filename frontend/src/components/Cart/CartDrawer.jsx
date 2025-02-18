import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import CartContent from "./CartContent";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-{15rem} sm:w-[25rem] md:w-[30rem] bg-white h-full shadow-lg transform transition-transform duration-300 flex flex-col z-100 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer} className="cursor-pointer">
            <IoClose className="h-5 w-5" />
          </button>
        </div>

        {/* Cart content area */}

        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {/* Cart Content */}
            <CartContent/>
        </div>

        {/* Checkout Button */}

        <div className="p-4 bg-white sticky bottom-0">
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer">CheckOut</button>
            <p className="text-xs tracking-tighter text-gray-500 mt-2 text-center">
                Shupping,Taxes and Discount Codes Calculated At checkout
            </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
