"use client";
import { useState } from "react";

export function Disclosure({ title, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleDisclosure}
        className="flex justify-between w-full bg-transparent border-0 cursor-pointer"
      >
        <p className="text-gray-700 text-lg font-bold">{title}</p>
        {isOpen ? (
          <span className="text-gray-700 text-lg font-bold">-</span>
        ) : (
          <span className="text-gray-700 text-lg font-bold">+</span>
        )}
      </button>

      {isOpen && <div className="flex flex-col gap-2 mt-3">{children}</div>}
    </div>
  );
}
