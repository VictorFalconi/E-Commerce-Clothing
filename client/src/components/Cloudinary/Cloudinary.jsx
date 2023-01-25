import styles from './Cloudinary.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { cloudinaryImage, cloudinaryProfile } from "../../redux/actions";

const Cloudinary = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
//   console.log(images,'Esto es del cloudinary')

  //   const [imageToRemove, setImageToRemove] = useState(null);

  //   function handleRemoveImg(imgObj) {
  //     setImageToRemove(imgObj.public_id);
  //     axios
  //       .delete(`http://localhost:3001/${imgObj.public_id}`)
  //       .then(() => {
  //         setImageToRemove(null);
  //         setImages((prev) =>
  //           prev.filter((img) => img.public_id !== imgObj.public_id)
  //         );
  //       })
  //       .catch((e) => console.log(e));
  //   }

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "djutofuyk",
        uploadPreset: "E-Comerce",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setImages((prev) => [
            ...prev,
            {
              secure_url: result.info.secure_url,
              public_id: result.info.public_id,
            },
          ]);
        }
      }
    );
    myWidget.open();
  }

  useEffect(() => {
    dispatch(cloudinaryImage(images));
    dispatch(cloudinaryProfile(images))
    console.log(images, 'imagenes de cloudinary')
  }, [images]);

  return (
    <div className="App">
      <button className={styles.upload} onClick={() => handleOpenWidget()}>Upload pictures</button>
      <div className="images-preview-container">
        {images?.map((image) => (
          <div key={image.public_id} className="image-preview">
            <img className={styles.image} src={image.secure_url} />
            {/* {imageToRemove != image.public_id && (
              <i className="close-icon" onClick={() => handleRemoveImg(image)}>
                X
              </i>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cloudinary;
