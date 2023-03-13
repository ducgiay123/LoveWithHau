import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import "./listImage.css";
import Img1 from "../Asserts/1.jpg";
import Img2 from "../Asserts/2.jpg";
import Img3 from "../Asserts/3.jpg";
import Img4 from "../Asserts/4.jpg";
import Img5 from "../Asserts/5.jpg";
import Img6 from "../Asserts/6.jpg";
import Img7 from "../Asserts/7.jpg";
import Img8 from "../Asserts/8.jpg";
import Img9 from "../Asserts/10.jpg";

const ListImage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img9, Img8];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="listContainer">
      {images.map((src, index) => (
        <img
          className={"ourPicture " + "img" + index}
          src={src}
          onClick={() => openImageViewer(index)}
          width="300px"
          key={index}
          style={{ margin: "20px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};
export default ListImage;
