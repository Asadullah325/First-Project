import React from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <>
      <div className="py-10 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-5">
          {/* Womens Collection */}
          <div className="relative flex-1">
            <img
              src="/womens-collection.webp"
              alt="Women Collection"
              className="w-full h-[600px] object-cover rounded-2xl shadow-md"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 p-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Women's Collection
              </h2>
              <Link to="/collections/all/?gender=women" className="text-lg font-medium text-gray-900 hover:text-gray-800 transition-all cursor-pointer">
                Shop Now
              </Link>
            </div>
          </div>
          {/* Mens Collection */}
          <div className="relative flex-1">
            <img
              src="/mens-collection.webp"
              alt="Women Collection"
              className="w-full h-[600px] object-cover rounded-2xl shadow-md"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 p-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Men's Collection
              </h2>
              <Link to="/collections/all/?gender=men" className="text-lg font-medium text-gray-900 hover:text-gray-800 transition-all cursor-pointer">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
