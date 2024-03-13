import React from "react";
import { FooterIcons } from "./FooterIcons";
import Image from "next/image";

const FooterLogos = () => {
  return (
    <div className="footer-social bg-gray-900 w-full mt-16">
      <div className="footer-social-content flex items-center flex-col md:flex-row gap-6 justify-between py-7 px-6 md:px-32  mx-auto">
        <section className="footer-social-content-social flex">
          <a href="#" className="pr-6 flex items-center">
            <Image
              loading="lazy"
              width={32}
              height={32}
              src={FooterIcons.Facebook}
              alt="Logo Facebook"
            />
          </a>

          <a href="#" className="pr-6 flex items-center">
            <Image
              loading="lazy"
              width={32}
              height={32}
              src={FooterIcons.Linkedin}
              alt="Logo Linkedin"
            />
          </a>

          <a href="#" className="pr-6 flex items-center">
            <Image
              loading="lazy"
              width={32}
              height={32}
              src={FooterIcons.Instagram}
              alt="Logo Instagram"
            />
          </a>

          <a href="#" className="flex items-center">
            <Image
              loading="lazy"
              width={32}
              height={32}
              src={FooterIcons.Youtube}
              alt="Logo Youtube"
            />
          </a>
        </section>

        <section className="footer-social-content-payment flex">
          <Image
            loading="lazy"
            width={32}
            height={25}
            src={FooterIcons.Visa}
            alt="Logo Visa"
            className="mr-6"
          />

          <Image
            loading="lazy"
            width={32}
            height={25}
            src={FooterIcons.Mastercard}
            alt="Logo Mastercard"
            className="mr-6"
          />

          <Image
            loading="lazy"
            width={32}
            height={25}
            src={FooterIcons.Visa}
            alt="Logo Visa"
            className="mr-6"
          />

          <Image
            loading="lazy"
            width={32}
            height={25}
            src={FooterIcons.Mastercard}
            alt="Logo Mastercard"
          />
        </section>

        <section className="footer-social-content-created flex">
          <section className="pr-5">
            <p className="text-xs font-medium text-white pb-1">Powered by</p>
            <Image
              loading="lazy"
              width={68}
              height={25}
              src={FooterIcons.Vtex}
              alt="Logo VTEX"
            />
          </section>

          <section>
            <p className="text-xs font-medium text-white pb-1">Developed by</p>
            <Image
              loading="lazy"
              width={119}
              height={29}
              src={FooterIcons.Maeztra}
              alt="Logo Maeztra"
            />
          </section>
        </section>
      </div>
    </div>
  );
};

export default FooterLogos;
