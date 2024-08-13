import './Heroheader.css/'

function Heroheader() {
  return (
    <>
      <div className="hero-header">
        <div className="result-country"><p>Found 234 countries</p></div>
        <div className="search-sec">
          <input className='input-text'
            type="text"
            placeholder='Search by Name, Region, Subregion' />
        </div>
      </div>
    </>
  )
}
export default Heroheader