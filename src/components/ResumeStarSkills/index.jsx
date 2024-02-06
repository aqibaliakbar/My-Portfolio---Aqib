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
            title={"Next JS"}
            filledStars={2}
            // experience={1}
            text={"Basic"}
          />
          <ResumeStar
            title={"WordPress"}
            filledStars={4}
            experience={1}
            text={"Year"}
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
            text={"Year"}
          />
          <ResumeStar
            title={"Express Js"}
            filledStars={3}
            experience={1}
            text={"Year"}
          />
          <ResumeStar
            title={"MongoDB"}
            filledStars={3}
            experience={1}
            text={"Year"}
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
            title={"PHP"}
            subText={"Server-side scripting language for web"}
            experience={"N/A"}
            // text={"Not Used"}
          />
          <ResumeStar
            title={"SQL"}
            subText={"Structured Query Language for databases"}
            experience={"N/A"}
            // text={"Not Used"}
          />
        </div>
      </div>
    </>
  );
};

export default ResumeStarSkills;
