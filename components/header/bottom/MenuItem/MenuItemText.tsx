import React from "react";

const MenuItemText = (props: React.ComponentProps<"span">) => {
  return <span {...props}>{props.children}</span>;
};

export default MenuItemText;
