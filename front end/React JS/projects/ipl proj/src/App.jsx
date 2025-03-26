import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";

function App() {
  return (
    <div className="max-w-screen min-h-screen mx-auto  ">
      <Routes className="w-full">
        <Route path="/" element={<Home />} />
        <Route path="/match-detail/:matchId" element={<MatchDetail />} />
      </Routes>
    </div>
  );
}

export default App;
