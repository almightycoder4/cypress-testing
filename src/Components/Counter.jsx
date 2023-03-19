import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Counter() {
  let [count, setcount] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8080/counter").then((res) => {
      setcount(res.data.value);
      console.log(res);
    });
  }, []);
  const addHandler = () => {
    const payload = {
      value: count + 1,
    };
    axios.post("http://localhost:8080/counter", payload).then((res) => {
      setcount(res.data.value);
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Counter</h1>
      <p>Value:{count}</p>
      <div style={{ display: "flex" }}>
        <button onClick={addHandler}>Increase</button>
        <button>Decrease</button>
      </div>
    </div>
  );
}
