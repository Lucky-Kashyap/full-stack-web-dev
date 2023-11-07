import "./App.css";
import Container from "./components/Container";
import DataProp from "./components/DataProp";
import FoodInput from "./components/FoodInput";
import Home from "./components/Home";
import List from "./components/List";
import MapList from "./components/MapList";

function App() {
  const foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  let textToShow = "Food Item Entered by User";

  const handleOnChange = (e) => {
    console.log(e.target.value);
    textToShow = e.target.value;
  };

  return (
    <div>
      <Container>
        <Home />
        <FoodInput handleOnChange={handleOnChange} />
        {/* <List /> */}
        <p>{textToShow}</p>
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
