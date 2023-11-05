import "./App.css";
import List from "./components/List";

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

      <List />
    </div>
  );
}

export default App;
