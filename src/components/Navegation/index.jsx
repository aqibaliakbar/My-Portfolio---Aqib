import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import darkLogo from "../../assets/images/Logo.svg"
import lightLogo from "../../assets/images/lightLogo.svg"
import './index.css'


const Navegation = ({ theme }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Update active link when the route changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className={`navegation ${theme}`}>
      <div className="header">
        <div className="header-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="header-info">
          <h4>Aqib A. Akbar</h4>
          {theme === "dark-theme" ? (
            <img src={darkLogo} alt="" />
          ) : (
            <img src={lightLogo} alt="" />
          )}
        </div>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
            exact="true"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => handleLinkClick("/about")}
            exact="true"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className={activeLink === "/resume" ? "active" : ""}
            onClick={() => handleLinkClick("/resume")}
            exact="true"
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolios"
            className={activeLink === "/portfolio" ? "active" : ""}
            onClick={() => handleLinkClick("/portfolio")}
            exact="true"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blogs"
            className={activeLink === "/blogs" ? "active" : ""}
            onClick={() => handleLinkClick("/blogs")}
            exact="true"
          >
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => handleLinkClick("/contact")}
            exact="true"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          @2024 <b>AQ-Developer</b>
        </p>
      </footer>
    </nav>
  );
};

export default Navegation;
