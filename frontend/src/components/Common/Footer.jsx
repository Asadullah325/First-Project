import React from "react";
import FooterTop from "../utils/Footer-Components/FooterTop";
import FooterBottom from "../utils/Footer-Components/FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-300 py-12 pb-6">
        {/* Footer Top */}
        <FooterTop />
        {/* Footer Bottom */}
        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
