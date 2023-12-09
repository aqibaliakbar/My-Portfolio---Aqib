import "./index.css";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const ResumeStar = ({ title, text, filledStars, experience, subText }) => {
  const stars =
    filledStars !== undefined
      ? Array.from({ length: 5 }, (_, index) =>
          index < filledStars ? (
            <StarIcon key={index} style={{ color: "var(--primary-color)" }} />
          ) : (
            <StarOutlineIcon
              key={index}
              style={{ color: "var(--primary-color)" }}
            />
          )
        )
      : null;
  return (
    <div className="progress-section">
      <div className="skills-container">
        <div className="skills-title ">
          <h6>{title}</h6>
          <span>{stars}</span>
          <p>{subText}</p>
        </div>
        <div className="skills-experience">
          <h3>{experience}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeStar;
