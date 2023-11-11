import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false); // edge case
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    })();
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (loading) {
    return <h1>Loading...!!!</h1>;
  }

  return (
    <div>
      <h1>API Handle</h1>
      <h2>Number of Products are: {products.length}</h2>
    </div>
  );
}

export default App;
