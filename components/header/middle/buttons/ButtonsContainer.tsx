import React from "react";
import { HeaderButton } from "./HeaderButton/HeaderButton";

const ButtonsContainer = () => {
  return (
    <section className="flex items-center">
      <HeaderButton.Root className="flex items-center p-4">
        <HeaderButton.Icon
          alt="User icon"
          src={"/icons/user-icon.svg"}
          width={20}
          height={20}
          loading="eager"
          className="h-4"
        />
        <HeaderButton.Text className="text-gray font-normal text-sm pl-2 hidden lg:block">
          Minha Conta
        </HeaderButton.Text>
      </HeaderButton.Root>
      <HeaderButton.Root className="flex items-center p-4">
        <HeaderButton.Icon
          alt="Heart icon"
          src={"/icons/heart-icon.svg"}
          width={20}
          height={20}
          loading="eager"
          className="h-4"
        />
        <HeaderButton.Text className="text-gray font-normal text-sm pl-2 hidden lg:block">
          Favoritos
        </HeaderButton.Text>
      </HeaderButton.Root>
      <HeaderButton.Root className="flex items-center p-4 rounded-lg border border-[#FAA500]">
        <HeaderButton.Icon
          alt="Bag icon"
          src={"/icons/bag-icon.svg"}
          width={20}
          height={20}
          loading="eager"
          className="h-4"
        />
        <HeaderButton.Text className="text-gray font-normal text-sm pl-2 hidden lg:block">
          Meu Carrinho
        </HeaderButton.Text>
      </HeaderButton.Root>
    </section>
  );
};

export default ButtonsContainer;
