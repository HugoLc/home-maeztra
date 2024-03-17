"use client";
import { useEffect, useState } from "react";

import { Modal } from "./Modal";

export function PopUp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    sessionStorage.setItem("newsletterClosed", "true");
    setModalIsOpen(false);
  };

  useEffect(() => {
    const isNewsletterClosed = sessionStorage.getItem("newsletterClosed");

    if (!isNewsletterClosed || isNewsletterClosed === "false") {
      setModalIsOpen(true);
    }
  }, []);

  return (
    <div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <div className="content-popup">
          <img
            src="/img/bg-newsletter.svg"
            alt="Imagem do popup"
            className="banner-popup"
          />

          <form>
            <img src="/icons/newsletter-mail-icon.svg" alt="Logo envelope" />

            <p className="welcome">Bem Vindo à MAEZTRA</p>

            <p className="greetings">
              Receba em Primeira mão <br />
              <strong>desconto e ofertas exclusivas</strong>
            </p>

            <input type="text" placeholder="Digite seu e-mail" />

            <button>Enviar</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
