import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      console.log(response.data);
    })();
  }, []);

  return (
    <div>
      <h1>API Handle</h1>
      <h2>Number of Products are: {products.length}</h2>
    </div>
  );
}

export default App;
