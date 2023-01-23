import { useEffect } from "react";
import { useState } from "react";
import styles from './Slider.module.css'

const Slider = ({images}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div>
      <img
        src={selectedImage}
        // className={loaded ? "loaded" : ""}
        className={styles.image}
        onLoad={() => setLoaded(true)}
      />
      {/* <div className={styles.carouserButton}>
        <button className={styles.button} onClick={previous}>{"<"}</button>
        <button className={styles.button} onClick={next}>{">"}</button>
      </div> */}
    </div>
  );
};

export default Slider;
