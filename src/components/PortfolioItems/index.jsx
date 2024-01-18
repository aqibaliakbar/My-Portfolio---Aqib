import { GitHub } from "@mui/icons-material";
import "./index.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";



const PortfolioItems = ({ portfolioItem }) => {
  return (
    <div className="portfolio-menu">
      {portfolioItem.map((item) => {
        return (
          <div className="portfolio-grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.git} target="_blank" rel="noreferrer">
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href={item.live} target="_blank" rel="noreferrer">
                      <VisibilityIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <Link to={`/portfolio/${item.id}`} className="link-title">
                <h6>{item.title}</h6>
              </Link>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioItems;
