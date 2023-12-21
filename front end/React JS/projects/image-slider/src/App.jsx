// App.js
import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";

const App = () => {
  const carouselImages = [
    "https://images.unsplash.com/photo-1682685797857-97de838c192e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682685797898-6d7587974771?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div>
      <h1>React Carousel Example</h1>
      <Carousel images={carouselImages} />
    </div>
  );
};

export default App;
