import React from "react";

interface HearderButtonProps extends React.ComponentProps<"button"> {}

const HeaderButtonRoot = ({
  className,
  children,
  ...props
}: HearderButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default HeaderButtonRoot;
