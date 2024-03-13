import React from "react";
import Image from "next/image";

const MenuItemIcon = (props: React.ComponentProps<typeof Image>) => {
  return <Image {...props} />;
};

export default MenuItemIcon;
