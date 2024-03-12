import React from "react";
import TopBar from "./top/TopBar";
import HeaderMiddleContainer from "./middle/HeaderMiddleContainer";
import Menu from "./bottom/Menu";

const Header = () => {
  return (
    <div>
      <TopBar />
      <HeaderMiddleContainer />
      <Menu />
    </div>
  );
};

export default Header;
