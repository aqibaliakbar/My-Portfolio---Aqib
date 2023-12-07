import "./index.css";

const ContactItem = ({title, icon, cont1, cont2}) => {
	return (
    <div className="contact-item">
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{cont1}</p>
        <p>{cont2}</p>
      </div>
    </div>
  );
};

export default ContactItem;
