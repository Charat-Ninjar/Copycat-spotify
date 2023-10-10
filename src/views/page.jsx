import React from "react";
import NavbarContainer from "../components/NavbarContainer";
import PlayerBar from "../components/PlayerBar";
import NavbarTopLeft from "../components/NavbarTopLeft";
import NavbarBottomLeft from "../components/NavbarBottomLeft";

const Page = () => {
  return (
    <div className="bg-black flex-col h-screen">
      <div className="flex h-full ml-2 pt-2">
        <div className="flex-col space-y-4 text-gray-200 mr-2">
          <div className="h-[12%]">
            <NavbarTopLeft />
          </div>
          <div className="h-[88%]">
            <NavbarBottomLeft />
          </div>
        </div>
        <div className="w-5/6 bg-black-background flex text-center justify-center items-center align-middle">
          <div className="text-white">test2</div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <PlayerBar />
      </div>
    </div>
  );
};

export default Page;
