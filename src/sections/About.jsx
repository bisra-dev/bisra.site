import React from 'react'
import { styles } from '../styles';
import ProfileCard from '../components/mvpblocks/ProfileCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import sectionWrapper from '../hoc/sectionWrapper';
import { textVariant } from '../utils/motion';

const About = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
          <motion.div
            variants={textVariant()}
            >
              <div className="px-6 py-3 bg-mist-800 rounded-3xl border-1 border-blue-600 inline-flex items-center space-x-2 text-white cursor-pointer">
                  <span className="font-inter font-bold text-white">About Me</span>
              </div>
          </motion.div>

          <motion.div
            variants={textVariant()}
            >
            <div className="py-4">
             <h2 className={`${styles.sectionHeadText} md:whitespace-nowrap`}>Building Websites That Stand Out</h2>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[380px] lg:flex-shrink-0"
          >
          <div className="py-4">
            <ProfileCard />
          </div>
        </motion.div>

        <div className="lg:px-16 lg:py-12">
          <div className="py-2">
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <p className={`${styles.sectionSubText2} max-w-2xl`}>I create fast, modern, and user-friendly websites that help businesses attract more customers and grow online. With clean code and pixel-perfect design, I turn ideas into engaging digital experiences that deliver results.</p>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <div className="bg-mist-800 py-6 px-6 w-full border-2 border-blue-600 rounded-xl flex flex-col items-center space-y-2 cursor-pointer">
              <p className="font-inter font-bold text-blue-600 text-4xl">50+</p>
              <p className="font-inter font-bold text-blue-200 text-[14px]">Projects Completed</p>
            </div>

            <div className="bg-mist-800 py-6 px-6 w-full border-2 border-blue-600 rounded-xl flex flex-col items-center space-y-2 cursor-pointer">
              <p className="font-inter font-bold text-blue-600 text-4xl">30+</p>
              <p className="font-inter font-bold text-blue-200 text-[14px]">Happy Clients</p>
            </div>

            <div className="bg-mist-800 py-6 px-8 w-full border-2 border-blue-600 rounded-xl flex flex-col items-center space-y-2 cursor-pointer">
              <p className="font-inter font-bold text-blue-600 text-4xl">4+</p>
              <p className="font-inter font-bold text-blue-200 text-[14px]">Years Experience</p>
            </div>
          </div>
          <div className="py-8">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.li
                className="font-inter font-bold text-mist-900 text-[15px]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-blue-600 text-xl">•</span> Clean, maintainable code built for long-term growth
              </motion.li>
              <motion.li
                className="font-inter font-bold text-mist-900 text-[15px]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
               <span className="text-blue-600 text-xl">•</span> Performance-focused websites with consistently high Lighthouse scores
              </motion.li>
              <motion.li
                className="font-inter font-bold text-mist-900 text-[15px]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-blue-600 text-xl">•</span> Pixel-perfect implementation from Figma designs
              </motion.li>
              <motion.li
                className="font-inter font-bold text-mist-900 text-[15px]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-blue-600 text-xl">•</span> Clear communication and reliable, on-time delivery
              </motion.li>
            </motion.ul>
          </div>
          
          <div>
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              >
                <div className="px-8 py-4 bg-blue-600 border-2 border-mist-800 rounded-2xl inline-flex items-center space-x-2 font-medium text-white transition-all   duration-200 cursor-pointer hover:shadow-lg">
                  <span className="font-inter font-bold text-white">Work With Me</span>
                  <ArrowRight className="h-4 w-4 font-bold" />
                </div>
              </motion.div>
          </div>

          </div>
        </div>
    </div>
  )
}

export default sectionWrapper (About, "about")