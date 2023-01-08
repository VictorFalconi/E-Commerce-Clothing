import styles from "./Slider.module.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcelebmafia.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fmegan-fox-street-style-west-hollywood-04-11-2021-6.jpg&f=1&nofb=1&ipt=58cf3291cab8615a8ccace1971ce4294f3f4bbc405dca033676d572364502dd8&ipo=images",
];

const Slider = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <div className={styles.contentSlider}>
      <motion.div ref={carouselRef} className={styles.sliderContainer}>
        <motion.div
          className={styles.slider}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image, index) => (
            <motion.div className={styles.item} key={index}>
              <Link to='/details'>
                <img src={image} alt="Carousel-image" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
