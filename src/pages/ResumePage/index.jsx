import Resume from "../../components/Resume";
import ResumeSkills from "../../components/ResumeSkills";
import ResumeStarSkills from "../../components/ResumeStarSkills";



const ResumePage = () => {
  return (
    <div className="main-layout">
      <ResumeStarSkills/>
      {/* <ResumeSkills /> */}
      <Resume/>
    </div>
  );
};

export default ResumePage;
