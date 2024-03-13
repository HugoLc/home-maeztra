import React from "react";
import { MenuItem } from "./MenuItem/MenuItem";

const Menu = () => {
  return (
    <nav className="flex items-center justify-center h-12">
      <div className="flex justify-between w-6/12 max-w-7xl min-w-[460px] items-center">
        <MenuItem.Root
          href="#"
          className="text-gray flex  font-normal text-sm"
          highlight={true}
        >
          <MenuItem.Icon
            src="icons/dress-icon.svg"
            alt="Dress icon"
            className="w-4 h-4 mr-2"
            width={16}
            height={16}
          />
          <MenuItem.Text>Novidades</MenuItem.Text>
        </MenuItem.Root>
        <MenuItem.Root href="#" className="text-gray flex font-normal text-sm">
          <MenuItem.Text>Vestidos</MenuItem.Text>
        </MenuItem.Root>
        <MenuItem.Root href="#" className="text-gray flex font-normal text-sm">
          <MenuItem.Text>Roupas</MenuItem.Text>
        </MenuItem.Root>
        <MenuItem.Root href="#" className="text-gray flex font-normal text-sm">
          <MenuItem.Text>Sapatos</MenuItem.Text>
        </MenuItem.Root>
        <MenuItem.Root href="#" className="text-gray flex font-normal text-sm">
          <MenuItem.Text>Lingerie</MenuItem.Text>
        </MenuItem.Root>
        <MenuItem.Root href="#" className="text-gray flex font-normal text-sm">
          <MenuItem.Text>Acessórios</MenuItem.Text>
        </MenuItem.Root>
        <MenuItem.Root href="#" className="text-gray flex font-normal text-sm">
          <MenuItem.Text>OUTLET</MenuItem.Text>
        </MenuItem.Root>
      </div>
    </nav>
  );
};

export default Menu;
