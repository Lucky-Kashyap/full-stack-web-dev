import styles from "./Display.module.css";

const Display = ({ calcValue }) => {
  return (
    <input
      type="text"
      value={calcValue}
      placeholder="number"
      className={styles.display}
      readOnly
    />
  );
};

export default Display;
