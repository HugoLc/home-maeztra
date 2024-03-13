interface MenuItemRootProps extends React.ComponentProps<"a"> {
  highlight?: boolean;
}

const MenuItemRoot = ({
  highlight = false,
  className,
  children,
  ...props
}: MenuItemRootProps) => {
  return (
    <a
      className={`${className} ${highlight ? "font-bold text-[#FAA500]" : ""}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default MenuItemRoot;
