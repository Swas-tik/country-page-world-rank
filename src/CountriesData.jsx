

const CountriesData = () => {
  return (
    fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .catch(error => {
    alert(error)
  })
  )
}

export default CountriesData