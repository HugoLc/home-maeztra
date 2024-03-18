import React from "react";
import Image from "next/image";

const MenuItemIcon = (props: React.ComponentProps<typeof Image>) => {
  return <Image {...props} alt="Menu icon" />;
};

export default MenuItemIcon;
