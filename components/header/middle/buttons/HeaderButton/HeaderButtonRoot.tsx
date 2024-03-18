import React from "react";

interface HearderButtonProps extends React.ComponentProps<"button"> {}

const HeaderButtonRoot = ({
  className,
  children,
  ...props
}: HearderButtonProps) => {
  return (
    <button className={className} {...props} aria-label="header button">
      {children}{" "}
    </button>
  );
};

export default HeaderButtonRoot;
