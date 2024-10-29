import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx(
        className,
        "flex items-center justify-between py-7 border-b border-gray-200 mb-16"
      )}
    >
      <Container>
        <div className="flex items-center">
          <div>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              sizes="100vw"
              className="mr-2"
            />
          </div>

          <div>
            <h3 className="uppercase text-[20px] font-semibold">
              Sneakers Store
            </h3>
            <p className="text-gray-500 font-medium font-inter">
              Магазин найкращих кросівок
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};
