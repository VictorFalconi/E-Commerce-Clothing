import styles from "./IconMove.module.css";
import {
  faShrimp,
  faFish,
  faOtter,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconsMove = () => {
  return (
    <div>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconFish}`}
        icon={faFish}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconOtter}`}
        icon={faOtter}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconWater}`}
        icon={faWater}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconShrimp}`}
        icon={faShrimp}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconFish}`}
        icon={faFish}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconOtter}`}
        icon={faOtter}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconWater}`}
        icon={faWater}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconShrimp}`}
        icon={faShrimp}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className={`${styles.icon}  ${styles.iconFish}`}
        icon={faFish}
      ></FontAwesomeIcon>
    </div>
  );
};

export default IconsMove;
