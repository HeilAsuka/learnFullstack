import React from "react";
import CapitalWeather from "./CapitalWeather"
const CountryInfo = ({ country }) => {
    return (
        <>
            <h2>{country.name}</h2>
            <div>Captial:{country.capital}</div>
            <div>Population:{country.population}</div>
            <div>Language:</div>
            <ul>
                {country.languages.map((language) => (
                    <li>{language.name}</li>
                ))}
            </ul>
            <div>
                <img class="flag" alt="flag" src={country.flag} />
            </div>
            <CapitalWeather capital={country.capital} />
        </>
    );
};
export default CountryInfo;
