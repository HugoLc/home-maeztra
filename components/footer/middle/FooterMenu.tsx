import React from "react";
import FooterMenuMobile from "./mobile/FooterMenuMobile";
import FooterMenuDesktop from "./desktop/FooterMenuDesktop";

const FooterMenu = () => {
  return (
    <section>
      <div className="block sm:hidden">
        <FooterMenuMobile />
      </div>
      <div className="hidden sm:block">
        <FooterMenuDesktop />
      </div>
    </section>
  );
};

export default FooterMenu;
