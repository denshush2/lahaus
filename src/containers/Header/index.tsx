import React, { useState } from "react";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Logo } from "../../components/Logo";
import useMedia from "use-media";
import { Drawer } from "@material-ui/core";

export const Header: React.FC = () => {
  const isWide = useMedia({ minWidth: "1000px" });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="
      md:mx-auto
      md:h-14
      border-2
      pd
      border-gray
      bg-white
      md:px-16
      flex
      md:justify-between
      md:items-center
      font-sans
      font-normal
      "
    >
      {!isWide && (
        <i
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="fas text-3xl mx-2 fa-bars"
        ></i>
      )}
      <Logo size={isWide ? "big" : "small"} />

      {isWide ? (
        <HeaderMenu />
      ) : (
        <Drawer
          open={isOpen}
          onClose={() => {
            setIsOpen(!isOpen);
          }}
          className="w-screen"
        >
          <HeaderMenu isWide={true} />
        </Drawer>
      )}
    </div>
  );
};
