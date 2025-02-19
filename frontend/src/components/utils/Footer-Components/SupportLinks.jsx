import React from "react";
import { Link } from "react-router-dom";


const SupportLinks = () => {
  return (
    <>
      <div>
        <h3 className="text-lg text-gray-800 font-bold mb-4">Support</h3>
        <ul className="space-y-2 text-gray-600">
          <li>
            <Link to="/" className="hover:text-gray-800">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-800">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-800">
              FAQ's
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-800">
              Features
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SupportLinks;
