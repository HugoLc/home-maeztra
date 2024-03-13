import React from "react";
import Newsletter from "./top/Newsletter";
import FooterMenu from "./middle/FooterMenu";
import FooterLogos from "./bottom/FooterLogos";

const Footer = () => {
  return (
    <footer className="shrink">
      <Newsletter />
      <FooterMenu />
      <FooterLogos />
    </footer>
  );
};

export default Footer;
