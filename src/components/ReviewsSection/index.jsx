import ReviewItem from "../ReviewItem";
import Title from "../Title";
import "./index.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReviewsSection = () => {
   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
     if (inView) {
       controls.start({ opacity: 1, y: 0 });
     }
   }, [controls, inView]);
	return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <Title title={"Reviews"} span={"Reviews"} />

        <div className="inner-layout">
          <div className="reviews">
            <ReviewItem
              text={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas?"
              }
            />
            <ReviewItem
              text={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt culpa ad itaque quas? Dos ir por culpa ad itaque quas!"
              }
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ReviewsSection;
