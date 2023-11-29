import "./App.css";
import ClockTimeDate from "./components/ClockTimeDate";
import ClockTitle from "./components/ClockTitle";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="container text-center">
      <Heading />
      <ClockTitle />
      <ClockTimeDate />
    </div>
  );
}

export default App;
