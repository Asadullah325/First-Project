import React from "react";

const Newsletter = () => {
  return (
    <>
      <div>
        <h3 className="text-lg text-gray-800 font-bold mb-4">Newsletter</h3>
        <p className="text-gray-600 mb-4">
          Subscribe to our newsletter for updates and exclusive offers.
        </p>
        <p className="font-medium text-sm text-gray-800 mb-6">
          Sign up for our newsletter
        </p>
        {/* Newsk=letter Form */}
        <form className="flex mt-2">
          <input
            type="email"
            placeholder="Enter You Email"
            className="p-3 w-full text-sm border border-gray-400  rounded-l-md focus:outline-none  transition-all "
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-3 px-6 border-t border-b border-gray-800  rounded-r-md hover:bg-gray-700 transition-all cursor-pointer"
          >
            Subsrcibe
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
