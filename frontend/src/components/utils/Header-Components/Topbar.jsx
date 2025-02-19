import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <>
      <div className="bg-red-600 text-white">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="items-center space-x-4 hidden md:flex">
            <Link to="/" className="hover:text-gray-400">
              <TbBrandMeta className="h-5 w-5" />
            </Link>
            <Link to="/" className="hover:text-gray-400">
              <IoLogoInstagram className="h-5 w-5" />
            </Link>
            <Link to="/" className="hover:text-gray-400">
              <RiTwitterLine className="h-5 w-5" />
            </Link>
          </div>
          <div className="text-center text-sm flex-grow">
            <span> Free Shipping on orders over $50! Shop Now.</span>
          </div>
          <div className="text-sm hidden md:block">
            <Link to="/" className="hover:text-gray-400">
              +92 123456789
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
