import ImageShow from "../ImageShow";
import "./imageList.css";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return (
    <div>
      <h3>Image list: {images.length}</h3>
      <div className='image-list'>{renderedImages}</div>
    </div>
  );
};

export default ImageList;
