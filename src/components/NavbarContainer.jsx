import React from "react";
import NavbarTopLeft from "./NavbarTopLeft";
import NavbarBottomLeft from "./NavbarBottomLeft";
import AlbumData from "./AlbumData";

const NavbarContainer = () => {
  return (
    <div className="flex-col space-y-1.5 navbox pt-2 container-box ">
      <div className="flex-grow">
        <NavbarTopLeft />
      </div>
      <div className="">
        <NavbarBottomLeft/>

      </div>
    </div>
  );
};

export default NavbarContainer;
