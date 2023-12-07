import ResumeProgressBar from "../ResumeProgressBar";
import Title from "../Title";
import "./index.css";
import HTML from "../../assets/images/skills/html.svg"
import CSS from "../../assets/images/skills/css.svg"
import JAVASCRIPT from "../../assets/images/skills/javascript.svg"
import REACTJS from "../../assets/images/skills/react.svg"
import REDUX from "../../assets/images/skills/redux.svg"
import NODE from "../../assets/images/skills/nodejs.svg"
import EXPRESS from "../../assets/images/skills/express.png"
import MONGO from "../../assets/images/skills/mongodb.png"
import GIT from "../../assets/images/skills/git.svg"

const ResumeSkills = () => {
	return (
    <>
      <Title title={"Skills"} span={"Skills"} />
      <div className="inner-layout skills">
        <ResumeProgressBar title={"HTML5"} skillImage={HTML} width={"70%"} text={"70%"} />
        <ResumeProgressBar title={"CSS3"} skillImage={CSS} width={"70%"} text={"70%"} />
        <ResumeProgressBar title={"JAVASCRIPT"} skillImage={JAVASCRIPT} width={"65%"} text={"65%"} />
        <ResumeProgressBar title={"React JS"} skillImage={REACTJS} width={"70%"} text={"70%"} />
        <ResumeProgressBar title={"Redux"} skillImage={REDUX} width={"60%"} text={"60%"} />
        <ResumeProgressBar title={"Node Js"} skillImage={NODE} width={"50%"} text={"50%"} />
        <ResumeProgressBar title={"Express Js"} skillImage={EXPRESS} width={"50%"} text={"50%"} />
        <ResumeProgressBar title={"MongoDB"} skillImage={MONGO} width={"50%"} text={"50%"} />
        <ResumeProgressBar title={"Github"} skillImage={GIT} width={"60%"} text={"60%"} />
      </div>
    </>
  );
};

export default ResumeSkills;
