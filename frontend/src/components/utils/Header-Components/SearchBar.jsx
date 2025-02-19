import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault;
    console.log("Search Term:", searchTerm);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <>
      <div
        className={`flex items-center justify-center w-full transition-all duration-300 ${
          isOpen
            ? "absolute top-0 left-0 w-full bg-white h-24 z-50 shadow-lg"
            : "w-auto"
        }`}
      >
        {isOpen ? (
          <form
            onSubmit={handleSearch}
            className="relative flex justify-center items-center w-full"
          >
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 px-4 py-2 rounded-md outline-0 w-full placeholder:text-gray-700 shadow-md"
              />
              {/* Search Icon */}
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <HiMagnifyingGlass className="h-5 w-5" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              <HiMiniXMark className="h-5 w-5" />
            </button>
          </form>
        ) : (
          <button className="cursor-pointer" onClick={handleSearchToggle}>
            <HiMagnifyingGlass className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default SearchBar;
