import React from "react";
import { FooterMenuColumn } from "./column/FooterMenuColumn";

const FooterMenuDesktop = () => {
  //TODO: ajustar html semantico
  return (
    <div className="pt-10">
      <div className="flex justify-between max-w-screen-xl mx-auto px-6 md:px-32">
        <FooterMenuColumn.Root className="mr-4 flex flex-col">
          <FooterMenuColumn.Title className="font-bold text-base pb-6">
            Informações
          </FooterMenuColumn.Title>

          <FooterMenuColumn.Link
            href="#"
            className="text-base font-normal pb-6"
          >
            Quem Somos
          </FooterMenuColumn.Link>

          <FooterMenuColumn.Link
            href="#"
            className="text-base font-normal pb-6"
          >
            Prazo de Envio
          </FooterMenuColumn.Link>

          <FooterMenuColumn.Link
            href="#"
            className="text-base font-normal pb-6"
          >
            Trocas e Devoluções
          </FooterMenuColumn.Link>

          <FooterMenuColumn.Link href="#" className="text-base font-normal">
            Promoções e Cupons
          </FooterMenuColumn.Link>
        </FooterMenuColumn.Root>

        <FooterMenuColumn.Root className="mr-4 flex flex-col">
          <FooterMenuColumn.Title className="font-bold text-base pb-6">
            Minha Conta
          </FooterMenuColumn.Title>

          <FooterMenuColumn.Link
            href="#"
            className="text-base font-normal pb-6"
          >
            Minha Conta
          </FooterMenuColumn.Link>

          <FooterMenuColumn.Link
            href="#"
            className="text-base font-normal pb-6"
          >
            Meus Pedidos
          </FooterMenuColumn.Link>

          <FooterMenuColumn.Link href="#" className="text-base font-normal">
            Cadastre-se
          </FooterMenuColumn.Link>
        </FooterMenuColumn.Root>

        <FooterMenuColumn.Root className="flex flex-col">
          <FooterMenuColumn.Title className="font-bold text-base pb-6 ">
            Onde nos Encontrar
          </FooterMenuColumn.Title>

          <FooterMenuColumn.Link
            href="#"
            className="text-base font-normal pb-6"
          >
            Lojas
          </FooterMenuColumn.Link>

          <FooterMenuColumn.Link href="#" className="text-base font-normal">
            Endereço
          </FooterMenuColumn.Link>
        </FooterMenuColumn.Root>
      </div>
    </div>
  );
};

export default FooterMenuDesktop;
