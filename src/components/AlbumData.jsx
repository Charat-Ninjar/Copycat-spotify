import React, {Children, createContext, useContext, useState} from "react";
import AlbumsBox from "./AlbumBox";
import NavbarBottomLeft from "./NavbarBottomLeft";
import Page from "../views/page";
import NavbarContainer from "./NavbarContainer";
const DataContext = createContext()

const AlbumData = ({children}) => {
    const [albumData, setAlbumData] = useState([
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        ,
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        ,
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        ,
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        ,
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        ,
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        {
          imgSrc: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
          title: "Liked Songs",
          songCount: Math.floor(Math.random() * 500),
        },
        // Add more album data objects as needed
      ]);
    return(
        <DataContext.Provider value={{albumData}}>{children}</DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext)
}
export default AlbumData