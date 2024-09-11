import SidebarRegion from "./SidebarRegion";

const Herosidebar = ({setQuery}) => {
  return (
    <div className="sidebar-section">
      <p>Sort by</p>
      <select className="filter-region" onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
        <option hidden >Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <SidebarRegion />
    </div>
  );
};

export default Herosidebar;
