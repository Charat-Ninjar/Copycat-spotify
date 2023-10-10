import React from "react";
import NavbarContainer from "../components/NavbarContainer";
import PlayerBar from "../components/PlayerBar";

const Page = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-500">
      <div className="h-screen">
        <NavbarContainer />
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <PlayerBar />
      </div>
    </div>
  );
};

export default Page;
