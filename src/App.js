import React from "react";
import Navbar from "./Navbar";
import HomePage from "./component/HomePage/home";
import ChangeName from "./component/HomePage/change";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <HomePage />
        <ChangeName />
      </div>
    </div>
  );
}

export default App;
