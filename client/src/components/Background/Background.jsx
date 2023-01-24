import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </div>
  );
};

export default Background;
