import "./index.css";
import Navegation from "../Navegation";

const Sidebar = ({navToggle, theme}) => {
  return (
    <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
      <Navegation theme={theme}  />
    </div>
  );
};

export default Sidebar;
