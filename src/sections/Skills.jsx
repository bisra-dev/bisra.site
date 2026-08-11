import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { tech1 } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import sectionWrapper from '../hoc/sectionWrapper';


const TechCard = ({index, title, icon}) => {
  return(
      <div className="w-full">
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.6)}
          whileHover={{
            scale: 1.03, y: -10,
            boxShadow: "0px 0px 60px 30px rgba(109, 40, 217, 0.6)", 
          }} 
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full green-pink-gradient rounded-[20px] shadow-card"
        >
          <div className="bg-mist-800 py-4 w-full border-2 border-blue-600 rounded-xl flex flex-col items-center space-y-4 cursor-pointer">
              <img src={icon} alt={title} className="w-10 h-10 object-contain" />
              <p className="font-inter font-bold text-blue-200 text-[14px]">{title}</p>
            </div>
        </motion.div>
      </div>
  );
}

const Skills = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center mt-8">
          <motion.div
                variants={textVariant()}
              >
              <div className="px-6 py-3 bg-mist-800 rounded-3xl border-1 border-blue-600 inline-flex items-center space-x-2 text-white cursor-pointer">
              <span className="font-inter font-bold text-white">Tech Stack</span>
            </div>
          </motion.div>
            <div className="py-4">
              <motion.div
                variants={textVariant()}
              >
                <h2 className={`${styles.sectionHeadText} md:whitespace-nowrap`}>Tools I Work With</h2>
              </motion.div>
            </div>
        </div>
        <div className="mt-16 w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {tech1.map((tech, index) => (
            <TechCard key={tech.title} index={index} {...tech} />
          ))}
        </div>
    </div>
  )
}

export default sectionWrapper (Skills, "skills")