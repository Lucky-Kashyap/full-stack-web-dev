import "./App.css";
import Card from "./components/Card/Card";
import Grid from "./components/Grid/Grid";

function App() {
  return (
    <div className="app">
      {/* <Card player="X" /> */}
      <Grid numberOfCards={9} />
    </div>
  );
}

export default App;
