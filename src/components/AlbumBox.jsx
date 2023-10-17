import React, { useState } from "react";
import { AiFillPushpin } from "react-icons/ai";
import { useData } from "../../../database/AlbumData";

const AlbumsBox = () => {

const {albumData} = useData()

  return (
    
    <div className="h-full" 
      style={{ overflowY: "scroll" }}>
      {albumData.map((data, index) => (
        <div key={index} className="flex h-16 gap-4 mt-4 text-white">
          <div>
            <img
              aria-hidden="true"
              draggable="false"
              loading="eager"
              src={data.imgSrc}
              data-testid="entity-image"
              alt={data.title}
              className="h-12 rounded-md"
            ></img>
          </div>
          
          <div>
            <div>{data.title}</div>
            <div className="flex gap-2 text-gray-400">
              {index === 0 && ( // Only render the pin for the first element
                <div className="fill-green-500">
                  <AiFillPushpin style={{ color: "green" }} />
                </div>
              )}
              <div>Playlist • {data.songCount} Songs</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumsBox;
