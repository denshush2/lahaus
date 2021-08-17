import React from "react";
import LazyLoad from "react-lazyload";
import { bigLogo, smallLogo } from "./constants";

type LogoProps = {
  size?: "small" | "big";
};

export const Logo: React.FC<LogoProps> = ({ size = "big" }) => {
  return (
    <LazyLoad height={250} once>
      <img
        src={size === "big" ? bigLogo : smallLogo}
        className={`${size === "small" && "w-8"}`}
        alt="lahausLogo"
      />
    </LazyLoad>
  );
};
