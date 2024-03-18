import Image from "next/image";
import React from "react";

const HeaderButtonIcon = (props: React.ComponentProps<typeof Image>) => {
  return <Image {...props} alt="icon" />;
};

export default HeaderButtonIcon;
