import React, { useState } from "react";
import "./styles.css";

export default function SearchFilter() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Orange", "Grapes", "PineApple"];
  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      Search:{" "}
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {" "}
        {filterItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}{" "}
      </ul>
    </div>
  );
}
