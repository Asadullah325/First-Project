import React from "react";
import Newsletter from "./Newsletter";
import ShopLinks from "./ShopLinks";
import SupportLinks from "./SupportLinks";
import FollowUs from "./FollowUs";

const FooterTop = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Newsletter */}
        <Newsletter />
        {/* shop links */}
        <ShopLinks />
        {/* Support Links */}
        <SupportLinks />
        {/* Follow Us */}
        <FollowUs />
      </div>
    </>
  );
};

export default FooterTop;
