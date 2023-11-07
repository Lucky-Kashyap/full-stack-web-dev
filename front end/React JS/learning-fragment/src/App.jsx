import "./App.css";
import Container from "./components/Container";
import DataProp from "./components/DataProp";
import FoodInput from "./components/FoodInput";
import Home from "./components/Home";
import List from "./components/List";
import MapList from "./components/MapList";

function App() {
  const foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <div>
      <Container>
        <Home />
        <FoodInput />
        {/* <List /> */}
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
