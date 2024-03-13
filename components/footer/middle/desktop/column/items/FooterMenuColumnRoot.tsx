import React from "react";

const FooterMenuColumnRoot = ({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
};

export default FooterMenuColumnRoot;
