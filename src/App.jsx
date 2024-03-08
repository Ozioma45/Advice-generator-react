import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Define state using useState hook
  const [advice, setAdvice] = useState("");

  // useEffect hook to mimic componentDidMount
  useEffect(() => {
    console.log("COMPONENT DID MOUNT");

    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error("Failed to Fetch Advice");
        }
        const data = await response.json();
        console.log(data.slip.advice);
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error("Error fetching advice:", error.message);
      }
    };
    fetchAdvice();
  }, []);

  return <h1>{advice}</h1>;
}

export default App;
