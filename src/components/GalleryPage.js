import React from "react";
import "./galleryPage.css";
import ListImage from "./ListImage";
const GalleryPage = () => {
  return (
    <div className="galleryPage" id="gallery">
      <div className="galleryContainer">
        <div className="galleryTitle">
          <h1>Memories</h1>
        </div>
        <ListImage />
      </div>
    </div>
  );
};

export default GalleryPage;
