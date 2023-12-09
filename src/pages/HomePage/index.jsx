import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./index.css";
import TypingAnimation from "../../components/TypingAnimation";
import { motion } from "framer-motion";




const HomePage = () => {
  const titles = [
    "Frontend Developer",
    "React Developer",
    "Mern Developer",
  ];
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1, transition: { duration: 1 } },
   };
  return (
    <motion.div
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="typography">
        <h1>
          <TypingAnimation textArray={titles} />
        </h1>
        <p>
          Front-end web developer skilled in HTML, CSS, and JavaScript,
          specializing in React and Redux. Proficient in back-end technologies
          like Node.js, Express, and MongoDB for comprehensive, end-to-end
          development. Committed to delivering visually appealing, scalable, and
          performant web solutions.
        </p>
        <div className="icons">
          <motion.a
            href="https://github.com/aqibaliakbar"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
            whileHover={{ scale: 1.05 }}
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aqib-ali-akbar-3a1b8a164/"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
            whileHover={{ scale: 1.05 }}
          >
            <LinkedInIcon />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
