import React, { useState, useEffect } from "react";
import "./styles.css";

export default function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {/* <ul>
        {" "}
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul> */}
      {data && <p>{JSON.stringify(data, null, 2)}</p>}
    </div>
  );
}
