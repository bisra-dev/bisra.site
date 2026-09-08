import { React, useState } from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import sectionWrapper from '../hoc/sectionWrapper';
import { Mail, SendIcon } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState("idle");
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
        const res = await fetch("https://formspree.io/f/xzeppdaq", {
            method: "POST",
            body: data,
            headers: { accept: "application/json" },
        });

        if (res.ok) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    } catch (err) {
        setStatus("error");
    }
}
  return (
    <div>
        <div className="bg-mist-800 rounded-2xl p-8">
            <div className="flex flex-col justify-center items-center mt-8">
                <motion.div
                    variants={textVariant()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3}}
                    >
                    <div className="px-6 py-3 bg-mist-800 rounded-3xl border-1 border-blue-600 inline-flex items-center space-x-2 text-white cursor-pointer">
                    <Mail className="w-5 h-5 text-white"/>
                    <span className="font-inter font-bold text-white">Get In Touch</span>
                    </div>
                </motion.div>
                <div className="mt-4">
                    <motion.div
                    variants={textVariant()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3}}
                    >
                    <h2 className={`${styles.sectionHeadText} md:whitespace-nowrap text-white`}>Let's Build Something</h2>
                    </motion.div>
                </div>
                <div>
                    <motion.div
                    variants={textVariant()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3}}
                    >
                    <h2 className={`${styles.sectionHeadText} md:whitespace-nowrap`}>Great Together</h2>
                    </motion.div>
                </div>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-12 lg:mx-16 flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-2 lg:items-center">
                    <label className="flex flex-col mt-4">
                    <span className="text-white text-[14px] font-inter font-bold">Your Name</span>
                    <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-black py-2 px-4 mt-2 placeholder:text-blue-200 rounded-2xl outline-none text-blue-200 border-1 border-blue-600" />
                    </label>
                    <label className="flex flex-col mt-4">
                    <span className="text-white text-[14px] font-inter font-bold">Company</span>
                    <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company Name"
                    className="bg-black py-2 px-4 mt-2 placeholder:text-blue-200 rounded-2xl outline-none text-blue-200 border-1 border-blue-600" />
                    </label>
                    <label className="flex flex-col mt-4">
                        <span className="text-white text-[14px] font-inter font-bold">Phone Number</span>
                        <input
                        type="text"
                        name="phone"
                        required
                        placeholder="+250 78 ..."
                        className="bg-black py-2 px-4 mt-2 placeholder:text-blue-200 rounded-2xl outline-none text-blue-200 border-1 border-blue-600" />
                    </label>
                </div>
                <label className="flex flex-col mt-4">
                    <span className="text-white text-[14px] font-inter font-bold">Email Address</span>
                    <input
                    type="email"
                    name="email"
                    required
                    placeholder="johndoe@example.com"
                    className="bg-black py-2 px-4 mt-2 placeholder:text-blue-200 rounded-2xl outline-none text-blue-200 border-1 border-blue-600" />
                </label>

                <label className="flex flex-col">
                    <span className="text-white text-[14px] font-inter font-bold">Message</span>
                    <textarea
                    rows="6"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="bg-black py-2 px-4 mt-2 placeholder:text-blue-200 rounded-2xl outline-none text-blue-200 border-1 border-blue-600" />
                </label>
                <button
                    type="submit"
                    disabled={ status === "sending"}
                    className="bg-blue-600 hover:bg-violet-700 py-4 text-white font-inter font-bold rounded-2xl shadow-lg flex justify-center items-center gap-2"
                >
                    { status === "sending" ? "sending..." : ""}
                     <SendIcon className="w-5 h-5 text-white text-center"/>Send Message</button>
                    { status === "success" && (
                        <p className="text-green-400 text-sm">Message sent successfully!</p>
                    )}
                    { status === "error" && (
                        <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
                    )}
                <div className="flex flex-wrap justify-center gap-4">
                    <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    >
                        <div className="px-6 py-2 bg-black rounded-3xl border-1 border-blue-600  text-white cursor-pointer">
                            <a href="https://github.com/bisra-dev" className="flex items-center space-x-2">
                                <img src="/GitHub_light.svg" alt="Logo Link"
                                    className="w-5 h-5 object-contain"
                                />
                                <span className="font-inter font-bold text-white">Github</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    >
                        <div className="px-6 py-2 bg-black rounded-3xl border-1 border-blue-600  text-white cursor-pointer">
                            <a href="https://www.linkedin.com/in/israel-habimana-037192429" className="flex items-center space-x-2">
                                <img src="/linkedin.svg" alt="Logo Link"
                                    className="w-5 h-5 object-contain"
                                />
                                <span className="font-inter font-bold text-white">Linkedin</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    >
                        <div className="px-6 py-2 bg-black rounded-3xl border-1 border-blue-600  text-white cursor-pointer">
                            <a href="https://mail.google.com/mail" className="flex items-center space-x-2">
                                <img src="/gmail.svg" alt="Logo Link"
                                    className="w-5 h-5 object-contain"
                                />
                                <span className="font-inter font-bold text-white">israhabimana@gmail.com</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default sectionWrapper (Contact, "contact")