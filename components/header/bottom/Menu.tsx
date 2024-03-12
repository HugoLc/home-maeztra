import React from "react";

const Menu = () => {
  return (
    <div className="header-links-container flex items-center justify-center h-12">
      <div className="header-links-container-links-container max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center">
          <a href="#" className="text-gray font-normal text-sm pr-10">
            <img
              src="../../../../assets/icon-dress.svg"
              alt="Icon Dress"
              className="w-4 h-4 mr-2"
            />
            Novidades
          </a>
          <a href="#" className="text-gray font-normal text-sm pr-10">
            Vestidos
          </a>
          <a href="#" className="text-gray font-normal text-sm pr-10">
            Roupas
          </a>
          <a href="#" className="text-gray font-normal text-sm pr-10">
            Sapatos
          </a>
          <a href="#" className="text-gray font-normal text-sm pr-10">
            Lingerie
          </a>
          <a href="#" className="text-gray font-normal text-sm pr-10">
            Acessórios
          </a>
          <a href="#" className="text-gray font-normal text-sm">
            OUTLET
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
