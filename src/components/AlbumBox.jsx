import React, { useState, useEffect } from "react";
import { AiFillPushpin } from "react-icons/ai";
import { useData } from "../../../spotify-database/src/AlbumData";

import axios from "axios";

const AlbumsBox = () => {
  const { albumData } = useData()
  const {test} = useState({
    imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
    title: "Liked Songs",
    songCount: 346,
  })
  const [dataTest, setDataTest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/api/getData"); // Replace with the actual API endpoint
        console.log(response.data)
        setDataTest(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="h-full" style={{ overflowY: "scroll" }}>
      {dataTest.map((data, index) => (
        <div key={data.id} className="flex h-16 gap-4 mt-4 text-white">
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
