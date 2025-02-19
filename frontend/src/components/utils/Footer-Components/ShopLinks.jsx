import React from "react";
import { Link } from "react-router-dom";

const ShopLinks = () => {
  return (
    <>
      <div>
        <h3 className="text-lg text-gray-800 font-bold mb-4">Shop</h3>
        <ul className="space-y-2 text-gray-600">
          <li>
            <Link to="/" className="hover:text-gray-800">
              Men's Top Wear
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-800">
              Women's Top Wear
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-800">
              Men's Bottom Wear
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-800">
              Women's Bottom Wear
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShopLinks;
