import "./index.css";

const ResumeProgressBar = ({ title, skillImage, text, width }) => {
  return (
    <div className="progress-section">
      <div className="skills-title gradient-border">
        <img src={skillImage} alt="" />
        <h6>{title}</h6>
      </div>

      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </div>
  );
};

export default ResumeProgressBar;
