import React, { useState, useEffect } from "react";
import FilteredCountry from "./components/FilteredCountry";
import axios from "axios";

const App = () => {
    const [countryData, setCountryData] = useState([]);
    const [filterString, setFilterString] = useState("");
    const filteredCountry = filterString
        ? countryData.filter((country) =>
              country.name.toLowerCase().includes(filterString.toLowerCase())
          )
        : countryData;
    const getCountyData = () => {
        const getData = axios
            .get("https://restcountries.eu/rest/v2/all")
            .then((res) => {
                console.log("getCountyData success");
                setCountryData(res.data);
            });
    };
    useEffect(getCountyData, []);
    const filterCountyName = (event) => {
        setFilterString(event.target.value);
    };
    return (
        <div>
            <div>
                Find Country{" "}
                <input value={filterString} onChange={filterCountyName} />
            </div>
            <FilteredCountry filteredCountry={filteredCountry} />
        </div>
    );
};

export default App;
