import "./index.css";

const PortfolioButton = ({ filterByCategory, portfolioCategoryBtn }) => {
  return (
    <div className="portfolio-category-btn">
      {portfolioCategoryBtn.map((category, index) => {
        return (
          <div
            className="portfolio-filtered-category"
            tabIndex="0"
            key={index}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioButton;
