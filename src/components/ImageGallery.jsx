import ImageCard from "./ImageCard";
import images from "../data/images";

function ImageGallery() {
  return (
    <>
      <h1>My Image Gallery</h1>

      <div className="gallery">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
          />
        ))}
      </div>
    </>
  );
}

export default ImageGallery;