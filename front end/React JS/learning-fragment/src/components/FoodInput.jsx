import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      // onChange={(e) => console.log(e.target.value)}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
