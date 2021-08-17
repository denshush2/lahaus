import React from "react";
import { menuItems } from "./constants";

type HeaderMenuProps = {
  isWide?: boolean;
};
export const HeaderMenu: React.FC<HeaderMenuProps> = ({ isWide }) => {
  const myProfile = (
    <div className={`flex items-center ${isWide && "justify-center"}`}>
      <span className="font-medium p-2">Mi Perfil</span>
      {!isWide && (
        <div className="relative">
          <i className="  w-5 h-5 fas fa-chevron-down"></i>
          <small className=" absolute bg-green  top-0 right-0 w-3 h-3 rounded-l"></small>
        </div>
      )}
    </div>
  );
  return (
    <>
      {isWide && myProfile}
      <nav className={`flex ${isWide && "flex-col mt-10 w-4/5 "} items-center`}>
        {menuItems.map((item) => (
          <div
            key={item}
            className={`mx-5 ${isWide ? "text-2xl" : "text-base"}`}
          >
            {item}
          </div>
        ))}
      </nav>
      {!isWide && myProfile}
    </>
  );
};
