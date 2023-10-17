import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import AlbumsBox from "./components/AlbumBox.jsx";
import AlbumData from "../../database/AlbumData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
