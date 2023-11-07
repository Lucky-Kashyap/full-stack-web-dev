import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      // onChange={(e) => console.log(e.target.value)}
      // onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
