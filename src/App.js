import React, {useState, useEffect} from "react";
import Dummy from "./component/Dummy"
import Form from "./component/Form"
import "./style/global.css"

function App() {
  return (
    <div className="app-container">
      <Form/>
      <Dummy/>
    </div>
  );
}

export default App;
