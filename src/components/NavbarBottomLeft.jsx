import React from "react";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import SuggestionPlaylist from "./SuggestionPlaylist";
import AlbumsBox from "./AlbumBox";
import AlbumData from "./AlbumData";

const NavbarBottomLeft = () => {
  return (
    <div className="rounded-md flex-col bg-neutral-900 w-96 pt-5 pl-5 gap-5 z-10 h-full">
      <div className="flex-col w-fit h-1/6">
        <div className="flex gap-3 icon">
          <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
            style={{ fill: "rgb(179, 179, 179)" }}
          >
            <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
          </svg>
          <div>Your Library</div>
          <div className="flex gap-3 h-7 w-56 icon items-center justify-end pr-4">
            <div>
              <AiOutlinePlus />
            </div>
            <div>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <SuggestionPlaylist />
        </div>
      </div>
      <div className="h-4/6">
        <AlbumData>
          <AlbumsBox />
        </AlbumData>
      </div>
    </div>
  );
};

export default NavbarBottomLeft;
