import React from "react";
import TopBar from "./top/TopBar";
import ToggleHeader from "./ToggleHeader";
import { headers } from "next/headers";
//TODO: animações
const Header = () => {
  const headerList = headers();
  console.log("assas", headerList.get("user-agent"));

  return (
    <div>
      <TopBar />
      <ToggleHeader />
    </div>
  );
};

export default Header;
