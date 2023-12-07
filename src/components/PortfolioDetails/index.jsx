import { useParams } from "react-router-dom";
import portfolios from "../../data/portfolios";
import "./index.css";
import Title from "../Title";
import { GitHub } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PortfolioDetails = () => {
  const { portId } = useParams();

  // Find the portfolio item with the matching id
  const portfolio = portfolios.find((item) => item.id.toString() === portId);

  if (!portfolio) {
    return <div>Portfolio not found</div>;
  }

  // Render the details using the 'portfolio' object
  return (
    <div className="main-layout">
      <Title title={portfolio.title} span={portfolio.title} />

      <div className="inner-layout portfolio-details">
        <div className="portfolio-img">
          <img src={portfolio.image} alt="" />
        </div>
        <div className="tech-info">
          <h2>Languages:</h2>
          <ul>
            {portfolio.language.map((languageItem, index) => (
              <li key={index}>
                {Object.entries(languageItem).map(([language, percentage]) => (
                  <p key={language}>
                    {language}: {percentage}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="portfolio-details-des">
        <h2>Description:</h2>
        <p dangerouslySetInnerHTML={{ __html: portfolio.description }} />{" "}
        {/*for line break using dangerouslySetInnerHTML={{}}*/}
        <div className="portfolio-details-links">
          <ul>
            <li>
              <a href={portfolio.git} target="_blank" rel="noreferrer">
                <GitHub />
              </a>
            </li>
            <li>
              <a href={portfolio.live} target="_blank" rel="noreferrer">
                <VisibilityIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default PortfolioDetails;
