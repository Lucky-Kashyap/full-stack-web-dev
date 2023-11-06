import "./App.css";
import DataProp from "./components/DataProp";
import List from "./components/List";
import MapList from "./components/MapList";

function App() {
  return (
    <div>
      <h1>React Fragments</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        natus rerum aliquid recusandae odit, magni nemo, corporis cumque ipsa
        alias neque assumenda nobis, minus impedit! Odit quia necessitatibus
        dolorem quis?
      </p>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Testimonials</li>
      </ul>

      {/* <List /> */}
      <MapList
        foodItems={["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"]}
      />

      <DataProp name="pass data as a props" description="Learning react js" />
    </div>
  );
}

export default App;