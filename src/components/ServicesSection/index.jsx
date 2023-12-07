import ServiceCard from '../ServiceCard'
import Title from '../Title'
import './index.css'
import Web from '../../assets/images/web.svg'
import Front from '../../assets/images/front.svg'
import Back from '../../assets/images/backend.svg'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion";

const ServicesSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);
	return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="services"
    >
      <Title title={"Services"} span={"services"} />
      <div className="service-categories">
        <ServiceCard
          image={Web}
          title={"Web Development"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
          }
        />
        <div className="mid-card">
          <ServiceCard
            image={Front}
            title={"Frontend Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
            }
          />
        </div>
        <ServiceCard
          image={Back}
          title={"Backend Development"}
          paragraph={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
          }
        />
      </div>
    </motion.div>
  );
}

export default ServicesSection