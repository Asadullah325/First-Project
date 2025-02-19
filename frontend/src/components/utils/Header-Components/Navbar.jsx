import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "../../Cart/CartDrawer";

import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, detNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawer = () => {
    detNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            SFC
          </Link>
        </div>
        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            top Wear
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            bottom Wear
          </Link>
        </div>
        {/* Right-icons */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-400">
            <HiOutlineUser className="h-5 w-5 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative cursor-pointer hover:text-gray-400"
          >
            <HiOutlineShoppingBag className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-1 -right-1.5 bg-red-700 text-white text-xs rounded-full px-1">
              4
            </span>
          </button>
          {/* Search bar */}
          <SearchBar />

          <button
            onClick={toggleNavDrawer}
            className="cursor-pointer md:hidden hover:text-gray-400"
          >
            <HiBars3BottomRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </nav>
      {/* Cart Drawer*/}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-[15rem] sm:w-[20rem] md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 z-30 ${
            navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
            <button onClick={toggleNavDrawer} className="cursor-pointer">
                <IoClose className="h-5 w-5 text-gray-600"/>
            </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link to="/" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-gray-800 mb-2">
              Men
            </Link>
            <Link to="/" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-gray-800 mb-2">
              Women
            </Link>
            <Link to="/" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-gray-800 mb-2">
              Top Wear
            </Link>
            <Link to="/" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-gray-800 mb-2">
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
