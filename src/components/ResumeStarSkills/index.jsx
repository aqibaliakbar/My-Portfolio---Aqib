import ResumeStar from "../ResumeStar";
import SmallTitle from "../SmallTitle";
import Title from "../Title";
import "./index.css";

const ResumeStarSkills = () => {
  return (
    <>
      <Title title={"Skills"} span={"Skills"} />
      <div className="inner-layout skills">
        <div>
          <div className="smallTitle">
            <SmallTitle className="smallTitle" title={"Front-End"} />
          </div>
          <ResumeStar
            title={"Html5"}
            filledStars={4}
            experience={2}
            text={"Years"}
          />
          <ResumeStar
            title={"Css3"}
            filledStars={4}
            experience={2}
            text={"Years"}
          />
          <ResumeStar
            title={"Javascript"}
            filledStars={3}
            experience={2}
            text={"Years"}
          />
          <ResumeStar
            title={"React JS"}
            filledStars={4}
            experience={2}
            text={"Years"}
          />
          <ResumeStar
            title={"Redux"}
            filledStars={3}
            experience={1}
            text={"Years"}
          />
        </div>
        <div>
          <div className="smallTitle">
            <SmallTitle className="smallTitle" title={"Back-End"} />
          </div>

          <ResumeStar
            title={"Node Js"}
            filledStars={3}
            experience={1}
            text={"Years"}
          />
          <ResumeStar
            title={"Express Js"}
            filledStars={3}
            experience={1}
            text={"Years"}
          />
          <ResumeStar
            title={"MongoDB"}
            filledStars={3}
            experience={1}
            text={"Years"}
          />
          <ResumeStar
            title={"Github"}
            filledStars={3}
            experience={2}
            text={"Years"}
          />
        </div>
        <div>
          <div className="smallTitle">
            <SmallTitle className="smallTitle" title={"Interested in"} />
          </div>
          <ResumeStar
            title={"TypeScript"}
            subText={"JavaScript with added syntax for types"}
            experience={"N/A"}
            // text={"Not Used"}
          />
          <ResumeStar
            title={"Next JS"}
            subText={"The React Framework for the Web"}
            experience={"N/A"}
            // text={"Not Used"}
          />
        </div>
      </div>
    </>
  );
};

export default ResumeStarSkills;
