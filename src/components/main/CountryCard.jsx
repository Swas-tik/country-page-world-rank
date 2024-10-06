import "../HeroMain.css/";
import CountriesData from "../../CountriesData";
import { useEffect, useState } from "react";

function CountryCard({ query, setCount }) {
  const [data, setData] = useState([]);
   setCount(data.length) 
  const sort= data.sort((a,b)=> b.population - a.population)
  

  useEffect(() => {
    CountriesData().then((countries) => {
      setData(countries);
    });
  }, []);

  return (
    <>
      {data
        .filter((country) => {
          return (
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
          );
        })
        .map((country) => (
          <a
            key={country.car.ccn3}
            className="country-card"
            href={`/country-page?name=${country.name.common}`}
          >
            <div className="result-data-container">
              <div className="flag-data-container">
                <img className="flag-img" src={country.flags.svg} alt="" />
              </div>
              <div className="name-data-container">
                <p>{country.name.common}</p>
              </div>
              <div className="population-data-container">
                <p>{country.population}</p>
              </div>
              <div className="area-data-container">{country.area}</div>
              <div className="region-data-container">{country.region}</div>
            </div>
          </a>
        ))}
    </>
  );
}

export default CountryCard;
