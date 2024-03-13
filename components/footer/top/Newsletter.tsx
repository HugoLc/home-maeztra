import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter border-t border-light-gray border-b">
      <div className="newsletter-content flex justify-center items-center px-6 md:px-32 py-10 max-w-screen-xl mx-auto">
        <p className="text-gray text-lg font-bold max-w-[307px] w-full pr-4 md:pr-0">
          Receba Nossa Newsletter
        </p>

        <form className="newsletter-content-form flex w-full">
          <input
            type="text"
            placeholder="Digite seu e-mail"
            className="w-full h-10 border border-gray rounded-md px-6"
          />

          <button className="bg-[#FAA500] ml-[-8px] h-10 max-w-[131px] w-full right-0 md:static rounded-md text-white font-bold text-lg">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
