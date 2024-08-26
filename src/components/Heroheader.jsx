import './Heroheader.css/'

function Heroheader({setQuery}) {
  return (
    <>
      <div className="hero-header">
        <div className="result-country"><p>Found 234 countries</p></div>
        <div className="search-sec">
          <input className='input-text'
            type="text"
            onChange={(e)=> setQuery((e.target.value.toLowerCase()))}
            placeholder='Search by Name, Region, Subregion' />
        </div>
      </div>
    
    </>
  )
}
export default Heroheader