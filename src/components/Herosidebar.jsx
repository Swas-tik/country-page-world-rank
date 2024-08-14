import SidebarRegion from "./SidebarRegion"

const Herosidebar = () => {
  return (
    <div className="sidebar-section">
      <p>Sort by</p>
      <select className="filter-region">
        <option hidden="">Filter by Region</option>
        <option value="Population">Population</option>
        <option value="Area">Area</option>
        <option value="Name">Name</option>
        <option value="Region">Region</option>
      </select>

      <SidebarRegion/>
    </div>
  )
}

export default Herosidebar