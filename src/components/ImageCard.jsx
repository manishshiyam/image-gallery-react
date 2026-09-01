function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />

      <div className="image-info">
        <h2>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;