// import logo from "./logo.svg";
// import "./App.css";


import React from "react";
import "./components/common.css";

import { Fruits } from "./components/Fruits";
import { Colors } from "./components/Colors";
import { Veg } from "./components/Vegetable";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <div className="main">
      <h1>App Home</h1>
      <Fruits />
      <Colors />
      <Veg />
      <Technologies />

    </div>
  );
}


export default App;
