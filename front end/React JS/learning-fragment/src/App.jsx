import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import DataProp from "./components/DataProp";
import FoodInput from "./components/FoodInput";
import Home from "./components/Home";
import List from "./components/List";
import MapList from "./components/MapList";

function App() {
  const [textToShow, setTextToShow] = useState("Food Item Entered by User");
  const [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetable",
    "Roti",
  ]);

  // let textToShow = "Food Item Entered by User";

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;

      e.target.value = "";
      const newItems = [...foodItems, newFoodItem];

      setFoodItems(newItems);
    }
    // console.log(e.target.value);
    // textToShow = e.target.value;

    // setTextToShow(e.target.value);
  };

  return (
    <div>
      <Container>
        <Home />
        <FoodInput handleKeyDown={handleKeyDown} />
        {/* <List /> */}
        {/* <p>{textToShow}</p> */}
        <MapList foodItems={foodItems} />

        {/* <DataProp name="pass data as a props" description="Learning react js" /> */}
      </Container>

      {/* <Container>
        <p>Above Code is all passing children </p>
      </Container> */}
    </div>
  );
}

export default App;
