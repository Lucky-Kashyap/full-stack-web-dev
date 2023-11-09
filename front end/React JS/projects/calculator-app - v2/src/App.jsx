import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import Footer from "./components/Footer";

function App() {
  const [calVal, setCalVal] = useState("0");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("0");
    } else if (buttonText === "X") {
      const oneElement = calVal.substr(0, calVal.length - 1);
      setCalVal(oneElement);
    } else if (buttonText === "=") {
      const result = String(eval(calVal));
      setCalVal(result);
    }
    // else if (buttonText === "" && calVal === "") {
    //   setCalVal("0");
    // }
    else {
      const newDisplayValue = calVal === "0" ? buttonText : calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <h1>Calculator App</h1>
      <Display calcValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
      <Footer />
    </div>
  );
}

export default App;
