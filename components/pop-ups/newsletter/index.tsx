"use client";
import { useEffect, useState } from "react";

import { Modal } from "./Modal";
import Image from "next/image";

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
          <Image
            src="/img/bg-newsletter.svg"
            alt="Imagem do popup"
            loading="lazy"
            width={426}
            height={532}
            className="banner-popup"
          />

          <form>
            <Image
              src="/icons/newsletter-mail-icon.svg"
              alt="Logo envelope"
              width={30}
              height={30}
              loading="lazy"
            />

            <p className="welcome">Bem Vindo à MAEZTRA</p>

            <p className="greetings">
              Receba em Primeira mão <br />
              <strong>desconto e ofertas exclusivas</strong>
            </p>

            <input type="text" placeholder="Digite seu e-mail" />

            <button className="flex bg-[#FAA500] rounded" aria-label="Enviar">
              Enviar{" "}
              <Image
                alt="send icon"
                src="/icons/send.svg"
                loading="lazy"
                width={12}
                height={20}
              />
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
