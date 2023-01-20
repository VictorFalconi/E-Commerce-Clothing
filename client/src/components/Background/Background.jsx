import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.background}>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
    </div>
  );
};

export default Background;
