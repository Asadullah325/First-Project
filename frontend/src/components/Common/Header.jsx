import React from "react";
import Topbar from "../utils/Topbar";
import Navbar from "../utils/Navbar";

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
