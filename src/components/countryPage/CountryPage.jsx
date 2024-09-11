import { useEffect, useState } from "react";
import "./CountryPage.css/";

const CountryPage = () => {
  const countryName = new URLSearchParams(location.search).get("name");

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          flag: data.flags.svg,
          name: data.name.common,
          official: data.name.official,
          population: data.population,
          area: data.area,
          capital: data.capital.join(" , "),
          subregion: data.subregion,
          language: Object.values(data.languages).join(", "),
          currency: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          continent: data.continents,
          border: (data.borders.join(' , ')),
        });
      });
  },[]);

  return countryData === null ? (
    "Loading..."
  ) : (
    <div className="country-page-container">
      <div className="country-page">
        <div className="country-page-header">
        <div className="country-flag-container">
          <img src={countryData.flag} alt="" />
        </div>
          <div className="country-name-container">
            <h1>{countryData.name}</h1>
            <p>{countryData.official}</p>
          </div>
          <div className="population-area-container">
            <div className="population">
              <p>Population</p>
              <span>{countryData.population.toLocaleString('en-IN')}</span>
            </div>
            <div className="area">
              <p>
                Area (km<sup>2</sup>)
              </p>
              <span>{countryData.area.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
        <hr />

        <div className="capital-container">
          <p>Capital</p>
          <span>{countryData.capital}</span>
        </div>
        <hr />
        <div className="subregion-container">
          <p>Subregion</p>
          <span>{countryData.subregion}</span>
        </div>
        <hr />
        <div className="language-container">
          <p>Language</p>
          <span>{countryData.language}</span>
        </div>
        <hr />
        <div className="currencies-container">
          <p>Currencies</p>
          <span>Indian rupee</span>
        </div>
        <hr />
        <div className="continent-container">
          <p>Continent</p>
          <span>{countryData.continent}</span>
        </div>
        <hr />
        <div className="neighbouring-countries-container">
            <p>Border</p>
            <span>{countryData.border}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
