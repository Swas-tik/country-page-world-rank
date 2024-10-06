import './Heroheader.css/'

function Heroheader({setQuery, count}) {
  return (
    <>
      <div className="hero-header">
        <div className="result-country"><p>Found {count} countries</p></div>
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