import "./index.css";

const SmallTitle = ({icon, title}) => {
	return (
    <div className="small-title-section">
      <p>{icon}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default SmallTitle;
