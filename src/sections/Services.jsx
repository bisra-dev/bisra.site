import React from 'react'
import { motion, useInView } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'; 
import { iconComponents } from '../constants';
import { CardHoverEffect } from '../components/ui/pulse-card';
import { useRef } from 'react'
import sectionWrapper from '../hoc/sectionWrapper'

const Offercard = ({ index, title, description, icon, features }) => {
    const valuesRef = useRef(null);
    const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
    return (
        <motion.div
            ref={valuesRef}
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={
            valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
            duration: 0.6,
            delay: index * 0.1 + 0.2,
            ease: 'easeOut',
            }}
            whileHover={{ y: -5, scale: 1.02 }}
        >
            <CardHoverEffect
            icon={icon}
            title={title}
            description={description}
            features={features}
            variant={
                index === 0
                ? 'purple'
                : index === 1
                    ? 'blue'
                    : index === 2
                    ? 'amber'
                    : 'rose'
            }
            glowEffect={true}
            size="lg"
            />
        </motion.div>
    );
}

const Services = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center mt-8 mb-12">
            <motion.div
            variants={textVariant()}
            >
                <div className="px-6 py-3 bg-mist-800 rounded-3xl border-1 border-blue-600 inline-flex items-center space-x-2 text-white cursor-pointer">
                    <span className="font-inter font-bold text-white">What I Do</span>
                </div>
            </motion.div>
            <div className="py-4">
                <motion.div
                variants={textVariant()}
                >
                    <h2 className={`${styles.sectionHeadText} md:whitespace-nowrap`}>Services I Offer</h2>
                </motion.div>
            </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {iconComponents.map((IconComponent, index) => (
                <Offercard key={IconComponent.title} index={index} {...IconComponent} />
            ))}
        </div>
    </div>
  )
}

export default sectionWrapper (Services, "services")