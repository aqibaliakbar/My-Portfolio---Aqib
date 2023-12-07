import PrimaryButton from '../PrimaryButton';
import './index.css'
import resumeImgDark from '../../assets/images/resume1.png'
import resumeImgLight from '../../assets/images/resumeLight.png'
import resume from '../../assets/Resume-Aqib.pdf'
import { motion } from "framer-motion";

const ImageSection = ({theme}) => {
	return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className={`image-section ${theme}`}
    >
      <div className="left-content">
        <div className="image-container">
          {theme === "dark-theme" ? (
            <img src={resumeImgDark} alt="" />
          ) : (
            <img src={resumeImgLight} alt="" />
          )}
        </div>
      </div>
      <div className="right-content">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I am <span>Developer</span>
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="paragraph"
        >
          Passionate about technology, I believe in the synergy of smart work
          and a strong work ethic. From crafting elegant designs to delving into
          intricate code, I find joy in every aspect of the development process.
          Embracing challenges is not just a choice, but a commitment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-info"
        >
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Aqib A. Akbar</p>
            <p>: Artificial Intelligence</p>
            <p>: Pakistani </p>
            <p>: Urdu, English </p>
            <p>: Lahore, Pakistan</p>
            <p>: Freelance</p>
          </div>
        </motion.div>
        <a
          href={resume}
          download="Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton title={"Download Resume"} />
        </a>
      </div>
    </motion.div>
  );
}

export default ImageSection