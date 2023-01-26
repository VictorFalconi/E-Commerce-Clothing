import { useEffect } from "react";
import { useState } from "react";
import styles from './SliderFeedBack.module.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SliderFeedBack = ({images}) => {
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
      <p className={styles.feedback}>{selectedImage?.comment}</p>
      <div>
        <FontAwesomeIcon className={styles.icon} icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className={styles.icon} icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className={styles.icon} icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className={styles.icon} icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className={styles.icon} icon={faStar}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default SliderFeedBack;
