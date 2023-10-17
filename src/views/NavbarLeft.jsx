import React from "react";
import NavbarTopLeft from "../components/NavbarTopLeft";
import NavbarBottomLeft from "../components/NavbarBottomLeft";

const NavbarLeft = () => {
  return (
    <div className="flex h-full ml-2 pt-2">
      <div className="flex-col space-y-4 text-gray-200 mr-2">
        <div className="h-[12%]">
          <NavbarTopLeft />
        </div>
        <div className="h-[88%]">
          <NavbarBottomLeft />
        </div>
      </div>
    </div>
  );
};

export default NavbarLeft;
