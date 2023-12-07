import Resume from "../../components/Resume";
import ResumeSkills from "../../components/ResumeSkills";



const ResumePage = () => {
  return (
    <div className="main-layout">
      <ResumeSkills />
      <Resume/>
    </div>
  );
};

export default ResumePage;
