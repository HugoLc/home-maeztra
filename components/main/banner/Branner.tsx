import Image from "next/image";
import React from "react";
//TODO: mudar Image
const Branner = () => {
  return (
    <section className="my-20 md:mt-8">
      <div className="flex flex-col w-[90vw] lg:flex-row items-center justify-center mx-auto">
        <div className="max-w-[90vw] lg:max-w-md mb-3 lg:mb-0 lg:mr-8">
          <h4 className="text-2xl font-bold mb-4 md:text-xl">Lorem ipsum </h4>
          <p className="text-sm font-medium leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>

        <div className="md:w-auto">
          <Image
            src="/img/new-collection.png"
            alt="Banner Coleção"
            className="w-full"
            width={1114}
            height={480}
          />
        </div>
      </div>
    </section>
  );
};

export default Branner;
