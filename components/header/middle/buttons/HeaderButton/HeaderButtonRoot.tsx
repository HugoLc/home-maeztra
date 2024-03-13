import React from "react";

interface HearderButtonProps extends React.ComponentProps<"button"> {}

const HeaderButtonRoot = ({
  className,
  children,
  ...props
}: HearderButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}{" "}
    </button>
  );
};

export default HeaderButtonRoot;
