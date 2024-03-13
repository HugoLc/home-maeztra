import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <section className="">
      <Image
        alt="Logo Maeztra"
        src="/img/logo-maeztra.png"
        loading="eager"
        width={147}
        height={18}
      />
    </section>
  );
};

export default Logo;
