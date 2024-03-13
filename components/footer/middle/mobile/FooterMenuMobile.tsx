import React from "react";
import { Disclosure } from "./Disclosure";

const FooterMenuMobile = () => {
  return (
    <div className="px-6 py-8 flex flex-col gap-4">
      <Disclosure id={1} title="Informações">
        <a href="#">Quem Somos</a>

        <a href="#">Prazo de Envio</a>

        <a href="#">Trocas e Devoluções</a>

        <a href="#">Promoções e Cupons</a>
      </Disclosure>

      <Disclosure title="Minha Conta" id={2}>
        <a href="#">Minha Conta</a>

        <a href="#">Meus Pedidos</a>

        <a href="#">Cadastre-se</a>
      </Disclosure>

      <Disclosure title="Onde nos Encontrar" id={3}>
        <a href="#">Lojas</a>

        <a href="#">Endereço</a>
      </Disclosure>
    </div>
  );
};

export default FooterMenuMobile;
