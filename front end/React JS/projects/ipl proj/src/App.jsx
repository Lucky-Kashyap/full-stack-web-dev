import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match-detail/:matchId" element={<MatchDetail />} />
      </Routes>
    </div>
  );
}

export default App;
