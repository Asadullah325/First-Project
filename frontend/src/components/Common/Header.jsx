import React from "react";
import Topbar from "../utils/Header-Components/Topbar";
import Navbar from "../utils/Header-Components/Navbar";

const Header = () => {

  return (
    <>
      <header className="border-b border-gray-300 shadow-sm">
        {/* Topbar*/}
        <Topbar />
        {/* Navbar*/}
        <Navbar />
        
      </header>
    </>
  );
};

export default Header;
