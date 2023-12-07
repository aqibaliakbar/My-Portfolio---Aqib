import "./index.css";
import Title from "../../components/Title";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import SmallTitle from "../SmallTitle";
import ResumeItem from "../ResumeItem";
import { useInView } from "react-intersection-observer";

const Resume = () => {
    const [ref, inView] = useInView({
      triggerOnce: true, 
    });
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <div className={`resume ${inView ? "visible" : ""}`} ref={ref}>
      <Title title={"Resume"} span={"resume"} />
      <div className="inner-layout">
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2023 - present"}
            title={"Front-End  Developer"}
            subTitle={"Envisionary Tech"}
            text={
              "I work as a Front-End Developer, specializing in creating reusable React components and transforming Figma designs into interactive React applications and websites. In addition to this, I handle tasks commonly associated with entry-level front-end developers, such as collaborating closely with UI/UX designers to implement visually appealing and user-friendly interfaces."
            }
          />
          <ResumeItem
            year={"2021-2023"}
            title={"Freelancer"}
            subTitle={"Fiverr/Upwork/FB"}
            text={
              "I have experience as a freelancer, where I specialized in creating landing pages and undertaking projects related to web development. My work encompassed the development of React websites and full-stack applications, with a focus on utilizing the MERN (MongoDB, Express.js, React, Node.js) stack."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021"}
            title={"Self-Taught - Javascript Developer"}
            subTitle={"Youtube"}
            text={
              "I am a self-taught web developer and programmer, who found a passion for this field during my academic pursuits, and it grew even more when I worked as an account officer. I enjoy making different things, like seeing quick results, and I appreciate how flexible this work allows me to be as it aligns seamlessly with my goals for both personal and professional growth. "
            }
          />
          <ResumeItem
            year={"2019 - 2021"}
            title={"Master of Business Administration"}
            subTitle={"University of Central Punjab"}
            text={
              "I completed my MBA in Finance, and the experience was instrumental in my self-discovery and clarifying my career aspirations. The skills and knowledge gained during my academic journey have proven beneficial in my web development and programming pursuits, simplifying the learning process for me. The combination of my financial background and newfound passion for web development has provided a unique and advantageous perspective in my professional journey. "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
