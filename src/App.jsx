import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Define state using useState hook
  const [advice, setAdvice] = useState("");

  // useEffect hook to mimic componentDidMount
  useEffect(() => {
    console.log("COMPONENT DID MOUNT");
  }, []);

  const fetchAdvice = () => {};

  return <h1>APP</h1>;
}

export default App;
