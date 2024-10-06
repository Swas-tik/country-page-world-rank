import SidebarRegion from "./SidebarRegion";

const Herosidebar = ({setQuery}) => {
  

  return (
    <div className="sidebar-section">
      <div className="sort-by"><p>Sort by</p></div>
      <select className="filter-region">
        <option value="Population">Population</option>
      </select>

      <SidebarRegion />
    </div>
  );
};

export default Herosidebar;
