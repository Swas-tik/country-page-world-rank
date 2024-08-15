import '../HeroMain.css/'
import CountriesData from '../../CountriesData'
import { useEffect, useState } from 'react'



function CountryCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    CountriesData().then(countries => setData(countries))
  }, [])

  return (
    <>

       {
        data ? data.map((country)=> 
      <div className='result-data-container' key={country.car.ccn3}>
        <div className='flag-data-container'>
          <img className='flag-img' src={country.flags.svg} alt="" />
        </div>
        <div className='name-data-container'>
          <p>{country.name.common}</p>
        </div>
        <div className='population-data-container'>
          <p>{country.population}</p>
        </div>
        <div className='area-data-container'>{country.area}</div>
        <div className='region-data-container'>{country.region}</div>

      </div>
       ) : <p>No Data</p>
      } 
    </>
  )
}

export default CountryCard