import React from "react";

const HeaderButtonText = (props: React.ComponentProps<"span">) => {
  return <span {...props}>{props.children}</span>;
};

export default HeaderButtonText;
