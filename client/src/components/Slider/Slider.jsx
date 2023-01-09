import styles from "./Slider.module.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({allProduct, category}) => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    setProduct(allProduct?.filter((e) => e.category === category))
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [product?.length === 0]);

  return (
    <div className={styles.contentSlider}>
      <motion.div ref={carouselRef} className={styles.sliderContainer}>
        <motion.div
          className={styles.slider}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {product?.map((image) => (
            <motion.div className={styles.item} key={image._id}>
              <Link to={`/`+image._id} >
                <img src={image.image} alt="Carousel-image" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
