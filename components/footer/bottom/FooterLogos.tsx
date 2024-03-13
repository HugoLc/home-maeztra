import React from "react";
import { FooterIcons } from "./FooterIcons";

const FooterLogos = () => {
  return (
    <div className="footer-social bg-gray-900 w-full mt-16">
      <div className="footer-social-content flex items-center flex-col md:flex-row gap-6 justify-between py-7 px-6 md:px-32  mx-auto">
        <section className="footer-social-content-social flex">
          <a href="#" className="pr-6 flex items-center">
            <img src={FooterIcons.Facebook} alt="Logo Facebook" />
          </a>

          <a href="#" className="pr-6 flex items-center">
            <img src={FooterIcons.Linkedin} alt="Logo Linkedin" />
          </a>

          <a href="#" className="pr-6 flex items-center">
            <img src={FooterIcons.Instagram} alt="Logo Instagram" />
          </a>

          <a href="#" className="flex items-center">
            <img src={FooterIcons.Youtube} alt="Logo Youtube" />
          </a>
        </section>

        <section className="footer-social-content-payment flex">
          <img src={FooterIcons.Visa} alt="Logo Visa" className="pr-6" />

          <img
            src={FooterIcons.Mastercard}
            alt="Logo Mastercard"
            className="pr-6"
          />

          <img src={FooterIcons.Visa} alt="Logo Visa" className="pr-6" />

          <img src={FooterIcons.Mastercard} alt="Logo Mastercard" />
        </section>

        <section className="footer-social-content-created flex">
          <section className="pr-5">
            <p className="text-xs font-medium text-white pb-1">Powered by</p>
            <img src={FooterIcons.Vtex} alt="Logo VTEX" />
          </section>

          <section>
            <p className="text-xs font-medium text-white pb-1">Developed by</p>
            <img src={FooterIcons.Maeztra} alt="Logo Maeztra" />
          </section>
        </section>
      </div>
    </div>
  );
};

export default FooterLogos;
