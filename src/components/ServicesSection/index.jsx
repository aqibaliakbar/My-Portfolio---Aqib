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
            "We specialize in crafting dynamic web solutions using the MERN stack, with proficiency in design tools such as Canva and Figma. Our toolkit extends to Material-UI, Tailwind CSS, and Bootstrap, allowing us to create sleek and responsive websites that seamlessly blend functionality with an aesthetic touch."
          }
        />
        <div className="mid-card">
          <ServiceCard
            image={Front}
            title={"Frontend Development"}
            paragraph={
              "As a frontend developer with expertise in crafting engaging and interactive web experiences. Proficient in JavaScript, React.js, and Redux.js, We bring innovation and precision to frontend development, ensuring seamless user interfaces and exceptional user journeys."
            }
          />
        </div>
        <ServiceCard
          image={Back}
          title={"Backend Development"}
          paragraph={
            "As a backend maestro, We leverage the power of Node.js, Express.js, and MongoDB to architect resilient and scalable server-side solutions. With expertise in crafting efficient APIs and managing data with MongoDB, We specialize in building the backbone of dynamic and high-performance web applications."
          }
        />
      </div>
    </motion.div>
  );
}

export default ServicesSection