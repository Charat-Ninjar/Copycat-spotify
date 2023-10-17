import React from "react";
import { AiFillHeart } from "react-icons/ai";
const PlayerBar = () => {
  return (
    <div className=" bg-black player-box h-20 flex justify-between items-center text-gray-400">
      <div className="flex ml-2 gap-3 items-center">
        <div className="flex">
          <img
            aria-hidden="false"
            draggable="false"
            loading="eager"
            src="https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163"
            data-testid="cover-art-image"
            alt=""
            className="h-14 w-14 items-center"
          ></img>
        </div>
        <div className="flex-col align-middle justify-center items-center">
            <div className="text-white text-sm">Do I Wanna Know?</div>
            <div className  ="text-xs">Arctic Monkeys</div>
        </div>
        <div>
            <AiFillHeart className="fill-green-400"/>
        </div>
      </div>
      <div className="flex">
        <div className="flex just">
          <img
            aria-hidden="false"
            draggable="false"
            loading="eager"
            src="https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163"
            data-testid="cover-art-image"
            alt=""
            className="h-14 w-14 items-center"
          ></img>
        </div>
        <div className="flex-col align-middle justify-center items-center">
            <div className="text-white text-sm">Do I Wanna Know?</div>
            <div>Arctic Monkeys</div>
        </div>
        <div>
            <AiFillHeart className="fill-green-400"/>
        </div>
      </div>
      <div className="flex">
        <div className="flex just">
          <img
            aria-hidden="false"
            draggable="false"
            loading="eager"
            src="https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163"
            data-testid="cover-art-image"
            alt=""
            className="h-14 w-14 items-center"
          ></img>
        </div>
        <div className="flex-col align-middle justify-center items-center">
            <div className="text-white text-sm">Do I Wanna Know?</div>
            <div>Arctic Monkeys</div>
        </div>
        <div>
            <AiFillHeart className="fill-green-400"/>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
