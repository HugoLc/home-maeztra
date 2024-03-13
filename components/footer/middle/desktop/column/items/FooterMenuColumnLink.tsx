import React from "react";

const FooterMenuColumnLink = ({
  children,
  ...props
}: React.ComponentProps<"a">) => {
  return <a {...props}>{children}</a>;
};

export default FooterMenuColumnLink;
