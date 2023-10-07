import React from "react";
import NavbarContainer from "../components/NavbarContainer";
import PlayerBar from "../components/PlayerBar";

const Page = () => {
    return(
        <div className="z-0 h-full bg-slate-500">
            <NavbarContainer/>
            <PlayerBar/>
        </div>
    )
}

export default Page