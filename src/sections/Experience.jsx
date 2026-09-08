import React from 'react'
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { Briefcase } from 'lucide-react';



const Experience = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center mt-8">
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3}}
                className='mt-10'
                >
                <div className="px-6 py-3 bg-mist-800 rounded-3xl border-1 border-blue-600 inline-flex items-center space-x-2 text-white cursor-pointer">
                <span className="font-inter font-bold text-white">Work History</span>
            </div>
            </motion.div>
            <div className="py-4">
                <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3}}
                >
                <h2 className={`${styles.sectionHeadText} md:whitespace-nowrap`}>Experience</h2>
                </motion.div>
            </div>
        </div>

        <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto relative">
                {/* vertical line */}
                <div className="absolute left-[27px] top-2 bottom-2 w-px bg-violet-700" />

                <div className="space-y-10">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        variants={fadeIn('left', 'spring', i * 0.3, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative flex gap-6"
                    >
                    {/* icon */}
                    <div
                        className={`relative z-10 border-1 border-blue-600 flex items-center justify-center w-14 h-14 rounded-full shrink-0
                        ${
                            exp.active
                            ? "bg-blue-600 shadow-[0_0_20px_4px_rgba(37,99,235,0.5)]" // glow effect for active/current role
                            : "bg-mist-800"
                        }`}
                    >
                        <Briefcase
                        className={`w-5 h-5 ${
                            exp.active ? "text-white" : "text-gray-400"
                        }`}
                        />
                    </div>

                    {/* card */}
                    <div className="flex-1 bg-mist-800 border border-blue-600 rounded-2xl p-6">
                        {/* 🔧 FIXED — was `flex justify-between items-start gap-4`,
                            which forced the title and the date/location onto one
                            row and caused them to overlap/wrap on small screens.
                            Now stacks vertically on mobile, and switches to a row
                            from `sm:` (640px) up. */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
                        <div>
                            <h3 className="text-white font-sy font-semibold text-lg">
                            {exp.role}
                            </h3>
                            <p className="text-blue-600 font-inter text-sm">{exp.company}</p>
                        </div>

                        <div className="text-left sm:text-right text-blue-200 text-sm shrink-0">
                            <div className="flex items-center gap-1 sm:justify-end">
                            {/* calendar */}
                            <span>📅</span>
                            <span>{exp.date}</span>
                            </div>
                            {exp.location && <div>{exp.location}</div>}
                        </div>
                        </div>

                        <ul className="space-y-2">
                        {exp.points.map((point, j) => (
                            <li
                            key={j}
                            className="text-blue-200 font-inter text-sm flex gap-2"
                            >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{point}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
            </section>
    </div>
  )
}

export default Experience