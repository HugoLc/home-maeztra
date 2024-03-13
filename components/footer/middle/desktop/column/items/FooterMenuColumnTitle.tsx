import React from "react";

const FooterMenuColumnTitle = ({
  children,
  ...props
}: React.ComponentProps<"p">) => {
  return <p {...props}>{children}</p>;
};

export default FooterMenuColumnTitle;
