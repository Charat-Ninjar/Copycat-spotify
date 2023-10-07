import React from "react";
import NavbarTopLeft from "./NavbarTopLeft";
import NavbarBottomLeft from "./NavbarBottomLeft";

const NavbarContainer = () => {
    return (
        <div className="flex-col space-y-1.5 navbox pt-2">
            <NavbarTopLeft/>
            <NavbarBottomLeft/>
        </div>
    )
}

export default NavbarContainer