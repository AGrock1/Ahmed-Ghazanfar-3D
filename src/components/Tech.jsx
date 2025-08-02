import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="py-10">
<motion.div variants={textVariant()}>
  <p className={`${styles.sectionSubText} text-center`}>Roadmap to Mastery</p>
  <h2 className={`${styles.sectionHeadText} text-center`}>Tech Goals</h2>
  <p className="text-center mt-2 text-sm italic max-w-2xl mx-auto text-gray-300">
    My primary goal is to grow as a cybersecurity professional. Alongside core security tools like 
    Linux and Wireshark, I’m exploring web development technologies—HTML, CSS, JavaScript, React, 
    Node.js, MongoDB, and more—as a hobby to strengthen my overall technical foundation.
  </p>
</motion.div>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
