import Image from "next/image";
import React from "react";

const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <div className="header-mobile-content flex justify-between items-center py-8 px-6 h-22">
        <section className="header-mobile-content-menu flex items-center">
          <button
            className="w-8 h-8 bg-transparent border-0 cursor-pointer mr-4"
            aria-label="menu"
          >
            <Image
              src={"/icons/icon-menu.svg"}
              alt="menu icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
          <Image
            src={"/img/logo-maeztra.png"}
            alt="Logo Maeztra"
            width={110}
            height={12}
            loading="lazy"
          />
        </section>

        <section className="header-mobile-content-search flex items-center">
          <button
            className="bg-transparent border-0 cursor-pointer mr-8"
            aria-label="search"
          >
            <Image
              src={"/icons/icon-busca.svg"}
              alt="search icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
          <button
            className="bg-transparent border-0 cursor-pointer"
            aria-label="cart"
          >
            <Image
              src={"/icons/bag-icon.svg"}
              alt="bag icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
        </section>
      </div>
    </div>
  );
};

export default HeaderMobile;
