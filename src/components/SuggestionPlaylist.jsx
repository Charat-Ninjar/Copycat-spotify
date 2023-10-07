import React, { useState } from "react";

const SuggestionPlaylist = () => {
  const [suggest, setSuggest] = useState([
    "Playlists",
    "Artists",
    "Albums",
    "Podcasts & Shows",
  ]);
  return (
    <div className="flex text-sm text-white justify-between pr-3  carousel carousel-center rounded-box">
      {suggest.map((item, index) => (
        <div key={index} className="bg-neutral-800 rounded-full">
          <div className="p-2">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default SuggestionPlaylist;
