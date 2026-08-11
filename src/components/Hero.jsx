import React from 'react'
import Badge15 from './base-ui/Badge15';
import { styles } from '../styles';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import EllipsisBlock from './mvpblocks/ellipsis-block';


const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden">
        <div className="py-24 grid lg:grid-cols-2">
          
          <div className={`${styles.paddingX} lg:mt-16 lg:px-21`}>

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
              <div>
                <Badge15 />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <div className="mt-6">
              <h1 className={`${styles.heroHeadText} max-w-lg font-syne normal-case  font-bold`}>
                <span className="text-mist-900">Hi, I'm </span><span className="text-violet-700">Israel Habimana</span><span className="text-mist-900">•</span>
              </h1>
            </div>
            </motion.div>          
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mt-6">
                <p className={`${styles.heroSubText} max-w-lg normal-case font-inter`}>
                  I help businesses turn their ideas into modern, fast, and scalable websites using React and the latest frontend technologies.
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
                  <div className="px-6 py-4 bg-blue-600 rounded-2xl font-medium text-white transition-all   duration-200 cursor-pointer hover:shadow-lg">
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
                  <div className="px-6 py-4 border-1 border-blue-700 bg-mist-800 rounded-2xl inline-flex items-center space-x-2 font-medium text-white transition-all   duration-200 cursor-pointer hover:shadow-lg">
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
            <div className="mt-4 flex flex-row justify-start items-center gap-6 cursor-pointer">
              <motion.div
              whileHover={{ scale: 1.3}}
              transition={{duration:0.5}}
              whileTap={{ scale: 0.9 }}
              >
              <div>
                <a href="https://github.com/bisra-dev">
                  <img src="/src/assets/GitHub_light.svg" alt="Logo Link"
                    className="w-8 h-8 object-contain"
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
                  <img src="/src/assets/linkedin.svg" alt="Logo Link"
                    className="w-8 h-8 object-contain"
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
                  <img src="/src/assets/instagram.svg" alt="Logo Link"
                    className="w-8 h-8 object-contain"
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
                  <img src="/src/assets/whatsapp.svg" alt="Logo Link"
                    className="w-26 h-26 object-contain"
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
            <div className={`${styles.paddingX}`}>
                <EllipsisBlock />
            </div>
          </motion.div>

        </div>
    </section>
  )
}

export default Hero