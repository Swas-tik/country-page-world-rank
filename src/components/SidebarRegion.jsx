import './Heroheader.css/'

function SidebarRegion(){
    return(
        <div className="region-sec">
            <p>Region</p>
            <div className="continent-sec">
                <p className='continent-selected'>Americas</p>
                <p>Antatica</p>
                <p>Africa</p>
                <p>Asia</p>
                <p>Europe</p>
                <p>Oceania</p>
            </div>
        </div>
    )
}

export default SidebarRegion