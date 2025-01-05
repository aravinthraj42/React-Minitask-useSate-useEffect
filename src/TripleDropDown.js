import React, { useState } from "react";

export default function TripleDropDown() {
  const data = {
    India: {
      Tamilnadu: ["Chennai", "Madurai", "Tutcorin"],
      Karnataka: ["Bangalore", "Mysore", "Mangalore"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      Texas: ["Houston", "Dallas", "Austin"],
    },
  };
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [District, setDistrict] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState("");
    setDistrict("");
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
    setDistrict("");
  };
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  return (
    <div>
      <h1>Country Drop Down</h1>
      Country :{" "}
      <select value={country} onChange={handleCountryChange}>
        <option value="" disabled>
          Select Country
        </option>
        {Object.keys(data).map((countryName) => (
          <option key={countryName} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>{" "}
      <br /> <br />
      State :{" "}
      <select value={state} onChange={handleStateChange}>
        <option value="" disabled>
          Select State
        </option>
        {country &&
          Object.keys(data[country]).map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
      </select>{" "}
      <br /> <br />
      District:
      <select value={District} onChange={handleDistrictChange}>
        <option value="" disabled>
          Select District
        </option>
        {state &&
          data[country][state].map((districtName) => (
            <option key={districtName} value={districtName}>
              {districtName}
            </option>
          ))}
      </select>{" "}
      <br />
      {country && state && District && (
        <div>
          <h3>Selected Country State Distict:</h3>
          <h5>{country}</h5>
          <h5>{state}</h5>
          <h5>{District}</h5>
        </div>
      )}
    </div>
  );
}
