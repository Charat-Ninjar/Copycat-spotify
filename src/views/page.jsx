import React from "react";
import NavbarContainer from "../components/NavbarContainer";
import PlayerBar from "../components/PlayerBar";
import NavbarTopLeft from "../components/NavbarTopLeft";
import NavbarBottomLeft from "../components/NavbarBottomLeft";

const Page = () => {
  return (
    <div className="bg-black flex-col h-screen">
      <div className="flex h-full">
        <div className="flex-col space-y-2 text-gray-200 ">
          <div className="">
            <NavbarTopLeft />
          </div>
          <div className="h-5/6">
            <NavbarBottomLeft />
          </div>
        </div>
        <div className="w-5/6 bg-green-300 flex text-center justify-center items-center align-middle">
          <div className="">test2</div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <PlayerBar />
      </div>
    </div>
  );
};

export default Page;
