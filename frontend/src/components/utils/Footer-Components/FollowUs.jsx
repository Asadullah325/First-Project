import React from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandMeta,
  TbBrandTwitter,
} from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

const FollowUs = () => {
  return (
    <>
      <div>
        <h3 className="text-lg text-gray-800 font-bold mb-4">Follow Us</h3>
        <div className="flex items-center space-x-4 mb-6">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandMeta className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandFacebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandTwitter className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandInstagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-800">Call Us</p>
        <p className="flex items-center gap-2 text-sm mt-2">
          <FiPhoneCall className="h-5 w-5" /> +92 123456789
        </p>
      </div>
    </>
  );
};

export default FollowUs;
