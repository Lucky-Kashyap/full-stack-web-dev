import "./App.css";
import Background from "./components/Background";

function App() {
  return (
    <div className="w-full h-screen relative bg-zinc-800">
      <Background />
      <div className="fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/50"></div>
    </div>
  );
}

export default App;
