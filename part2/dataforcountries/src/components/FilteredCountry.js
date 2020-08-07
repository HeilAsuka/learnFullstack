import React from "react";
import CountryInfo from "./CountryInfo"
const FilteredCountry = ({ filteredCountry }) => {
    if (filteredCountry.length > 10) {
        console.log("to many");
        return <div>Too many countries match</div>;
    } else if (filteredCountry.length <= 10 && filteredCountry.length > 1) {
        console.log("", filteredCountry);
        return filteredCountry.map((country) => {
            return <div>{country.name}</div>;
        });
    } else if (filteredCountry.length === 1) {
        return <CountryInfo country={filteredCountry[0]} />;
    } else {
        console.log("null");
        return <div>Too many countries match</div>;
    }
};
export default FilteredCountry;
