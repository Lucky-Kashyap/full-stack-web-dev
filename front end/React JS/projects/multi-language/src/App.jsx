import { useTransition } from "react";
import "./App.css";

function App() {
  const { t } = useTransition();
  return (
    <div className="main">
      <h1>{t("greeting")}</h1>
    </div>
  );
}

export default App;
