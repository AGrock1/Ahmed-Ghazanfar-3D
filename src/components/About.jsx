import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    scale={1.02}
    transitionSpeed={400}
    glareEnable={false}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m Ahmed Ghazanfar, a BS Computer Science student at Louisiana Tech University. 
        My journey so far has been about exploring technology through hands-on experiences: 
        from interning at NED University and managing Amazon/Daraz accounts, to building a 
        multi-functional robot that combined gesture control, cleaning, and IoT features. 
        I’ve judged STEM competitions, participated in NASA Space Apps and the World Scholar’s Cup, 
        and competed nationally in athletics (shot put).  

        While I’m still learning — often building projects through online resources and guidance — 
        my goal is to grow into cybersecurity and software development. For now, I’m focused on 
        building practical projects, learning from every challenge, and laying the foundation 
        for a career where technology and real-world problem solving meet.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
