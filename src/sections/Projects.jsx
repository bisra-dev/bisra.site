import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion';
import sectionWrapper from '../hoc/sectionWrapper';
import { project1 } from '../constants';
import { ExternalLink } from 'lucide-react';


const ProCard = ({index, title, image, description, tool, tool2}) => {
    return (
        <div>
            <motion.div
                variants={fadeIn( "up", "spring", 0.1, 0.5)}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.03, y: -10 }}
                viewport={{ once: true, amount: 0.3}}
            >
                <div className="relative h-[100%] border-1 border-blue-600 bg-mist-800 rounded-2xl cursor-pointer">
                    <img src={image} alt="E-commerce"
                        className="w-[100%] h-[240px] rounded-t-2xl object-cover"
                    />
                    <div className="w-full mt-4 px-6">
                        <h3 className="text-xl text-white font-syne font-bold">{title}</h3>
                        <p className="mt-2 font-inter text-blue-200 text-[15px]">{description}</p>
                        <div className="mt-4 w-full flex flex-wrap gap-1">
                            {tool.map((tool1) => (
                                <div className="border-1 border-blue-600 rounded-2xl px-3">
                                    <span className="font-inter font-bold text-[12px] text-white">{tool1.tool2}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 mb-6">
                            <a href="">
                                <div className="flex items-center gap-2">
                                    <span className="font-inter font-bold text-[15px] text-blue-200">View Project</span>
                                    <span className="text-violet-600">
                                        <ExternalLink className="h-5 w-5" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const Projects = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center mt-8">
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3}}
                >
                <div className="px-6 py-3 bg-mist-800 rounded-3xl border-1 border-blue-600 inline-flex items-center space-x-2 text-white cursor-pointer">
                <span className="font-inter font-bold text-white">Portfolio</span>
            </div>
            </motion.div>
            <div className="py-4">
                <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3}}
                >
                <h2 className={`${styles.sectionHeadText} md:whitespace-nowrap`}>Featured Projects</h2>
                </motion.div>
            </div>
        </div>

        <div className="mt-12 w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {project1.map((pro, index) => (
                <ProCard key={pro.title} index={index} {...pro} />
            ))}
        </div>
    </div>
  )
}

export default sectionWrapper (Projects, "projects")