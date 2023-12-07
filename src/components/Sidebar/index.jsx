import "./index.css";
import Navegation from "../Navegation";

const Sidebar = ({ navToggle, theme }) => {
  const handleSidebarClick = (event) => {
    // Prevent the event from propagating to the parent elements
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleSidebarClick}
      className={`sidebar ${navToggle ? "nav-toggle" : ""}`}
    >
      <Navegation theme={theme} />
    </div>
  );
};

export default Sidebar;
