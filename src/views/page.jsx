import React from "react";
import NavbarContainer from "../components/NavbarContainer";
import PlayerBar from "../components/PlayerBar";
import NavbarTopLeft from "../components/NavbarTopLeft";
import NavbarBottomLeft from "../components/NavbarBottomLeft";
import NavbarLeft from "./NavbarLeft";
import HeroHome from "./HeroHome";

const Page = () => {
  return (
    <div className="bg-black flex-col h-screen">
      <div className="flex h-full ml-2 pt-2">
        <div>
          <NavbarLeft/>
        </div>
        <div className="w-5/6">
          <HeroHome/>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <PlayerBar />
      </div>
    </div>
  );
};

export default Page;
