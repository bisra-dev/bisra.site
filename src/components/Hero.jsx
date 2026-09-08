import React from 'react'
import Badge15 from './base-ui/Badge15';
import { styles } from '../styles';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import EllipsisBlock from './mvpblocks/ellipsis-block';
import sectionWrapper from '../hoc/sectionWrapper';


const Hero = () => {
  return (
    <section className="relative w-full min-h-screen">
        <div className="px-4 grid lg:grid-cols-2">
          
          <div className='max-w-lg px-3'>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center px-4 py-1"
            >
              <div className="mt-12">
                <Badge15 />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <div className="mt-4 lg:mt-16">
              <h1 className={`${styles.heroHeadText} max-w-md font-syne normal-case  font-bold`}>
                <span className="text-violet-700">Fullstack Developer</span>
              </h1>
            </div>
            </motion.div>          
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-4">
                <p className={`${styles.heroSubText} max-w-lg normal-case font-inter`}>
                  I help businesses turn their ideas into modern, fast, and scalable websites using next.js and react latest frontend technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-6 inline-flex items-center space-x-2 gap-2">
                <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.95 }}
                >
                  <div className="px-5 py-3.5 bg-blue-600 rounded-2xl font-medium text-white transition-all   duration-200 cursor-pointer hover:shadow-lg">
                    <a href="#projects" className="inline-flex items-center space-x-2">
                      <span className="font-inter font-bold text-white whitespace-nowrap">View Projects</span>
                      <ArrowRight className="h-4 w-4 font-bold" />
                    </a>
                  </div>
                </motion.div>

                  <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.95 }}
                >
                  <div className="px-5 py-3.5 border-1 border-blue-700 bg-mist-800 rounded-2xl inline-flex items-center space-x-2 font-medium text-white transition-all   duration-200 cursor-pointer hover:shadow-lg">
                    <a href="#contact">
                       <span className="font-inter font-bold text-white whitespace-nowrap">Contact Me</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <div className="flex flex-row justify-start items-center gap-5 cursor-pointer">
              <motion.div
              whileHover={{ scale: 1.3}}
              transition={{duration:0.5}}
              whileTap={{ scale: 0.9 }}
              >
              <div>
                <a href="https://github.com/bisra-dev">
                  <img src="/GitHub_light.svg" alt="Logo Link"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
              </motion.div>

              <motion.div
              whileHover={{ scale: 1.3}}
              transition={{duration:0.5}}
              whileTap={{ scale: 0.9 }}
              >
              <div>
                <a href="https://www.linkedin.com/in/israel-habimana-037192429">
                  <img src="/linkedin.svg" alt="Logo Link"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
              </motion.div>

              <motion.div
              whileHover={{ scale: 1.3}}
              transition={{duration:0.5}}
              whileTap={{ scale: 0.9 }}
              >
              <div>
                <a href="https://instagram.com/bisra.dev">
                  <img src="/instagram.svg" alt="Logo Link"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
              </motion.div>

              <motion.div
              whileHover={{ scale: 1.3}}
              transition={{duration:0.5}}
              whileTap={{ scale: 0.9 }}
              >
              <div>
                <a href="https://wa.me/qr/DADWUCRHZS7YO1">
                  <img src="/whatsapp.svg" alt="Logo Link"
                    className="w-25 h-25 object-contain"
                  />
                </a>
              </div>
              </motion.div>
            </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="lg:flex-shrink-0"
          >
            <div>
                <EllipsisBlock />
            </div>
          </motion.div>

        </div>
    </section>
  )
}

export default sectionWrapper (Hero)