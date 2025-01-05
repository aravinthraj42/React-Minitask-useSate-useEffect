import React, { useState } from "react";
import Counter from "./counter";
import FetchData from "./FetchData";
import SearchFilter from "./SearchFilter";
import "./styles.css";
import TripleDropDown from "./TripleDropDown";

export default function App() {
  return (
    <div className="App">
      <TripleDropDown />
    </div>
  );
}
