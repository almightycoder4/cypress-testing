import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Counter() {
  let [count, setcount] = useState("");
  useEffect(() => {
    axios
      .get("https://morning-charm-curiosity.glitch.me/counter")
      .then((res) => {
        setcount(res.data.value);
      });
  }, []);
  const addHandler = () => {
    const payload = {
      value: count + 1,
    };
    axios
      .post("https://morning-charm-curiosity.glitch.me/counter", payload)
      .then((res) => {
        setcount(res.data.value);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <div data-testid="value-div">Value:{count}</div>
      <div style={{ display: "flex" }}>
        <button onClick={addHandler}>Increase</button>
        <button>Decrease</button>
      </div>
    </div>
  );
}
