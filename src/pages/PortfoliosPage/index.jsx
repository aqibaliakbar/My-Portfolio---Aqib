import { useState } from "react";
import Title from "../../components/Title";
import portfolios from "../../data/portfolios";
import PortfolioItems from "../../components/PortfolioItems";
import PortfolioButton from "../../components/PortfolioButton";
import { motion } from "framer-motion";
const allCategories = [
  "All",
  "Featured",
  ...new Set(portfolios.map((item) => item.category.name)),
];

const PortfoliosPage = () => {

 const itemsVariants = {
   hidden: { opacity: 0, scale: 0.8 },
   visible: {
     opacity: 1,
     scale: 1,
     transition: { duration: 1, staggerChildren: 0.5 },
   },
 };

  const [portfolioItem, setPortfolioItem] = useState(portfolios);
  const [portfolioCategoryBtn, setPortfolioCategoryBtn] = useState(allCategories);

  const filterByCategory = (categoryBtn) => {

       if (categoryBtn === "All") {
         setPortfolioItem(portfolios);
         return;
       }

const filteredData = portfolios.filter(
  (item) =>
    item.category.name === categoryBtn ||
    (item.category.featured && categoryBtn === "Featured")
);
        setPortfolioItem(filteredData);
    }
   
  return (
    <div className="main-layout">
      
      <Title title={"Portfolios"} span={"Portfolios"} />
      <motion.div
        className="inner-layout"
        initial="hidden"
        animate="visible"
        variants={itemsVariants}
      >
        <PortfolioButton
          filterByCategory={filterByCategory}
          portfolioCategoryBtn={portfolioCategoryBtn}
        />
        <PortfolioItems portfolioItem={portfolioItem} />
      </motion.div>
    </div>
  );
};

export default PortfoliosPage;
