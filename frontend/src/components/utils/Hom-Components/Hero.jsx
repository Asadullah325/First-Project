import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          src="/rabbit-hero.webp"
          alt="SFC"
          className="w-full h-[400px] md:h-[600px]  object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
              Welcome to SFC
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link
              to={"/"}
              className="bg-white text-black font-bold py-3 px-6 hover:bg-gray-200 rounded-lg transition-all cursor-pointer"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
