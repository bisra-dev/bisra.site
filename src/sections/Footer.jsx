import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white font-syne font-semibold text-lg">BISRA <span className="text-blue-600 text-xl">•</span></h3>
              <p className="text-blue-200 font-inter text-sm mt-1 max-w-sm">
                Websites and Web Application Developer • Building with React & Three.js
              </p>
            </div>

            <div className="flex gap-6 font-inter font-semibold text-blue-200 text-sm">
                <div>
                    <h3 className="text-violet-600 font-syne font-semibold text-lg">Quick Links</h3>
                    <ul className="mt-4">
                        <li>
                            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
                        </li>
                        <li className="mt-1">
                            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
                        </li>
                        <li className="mt-1">
                            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
                        </li>
                        <li className="mt-1">
                            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
                        </li>
                        <li className="mt-1">
                            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-4 font-inter">
              <a href="https://github.com/bisra-dev" target="_blank" rel="noreferrer"
                className="text-blue-200 hover:text-blue-600 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/israel-habimana-037192429" target="_blank" rel="noreferrer"
                className="text-blue-200 hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
              <a href="https://mail.google.com/mail" target="_blank" rel="noreferrer"
                className="text-blue-200 hover:text-blue-600 transition-colors">
                Email
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-blue-600 text-center text-[14px] text-blue-200">
            © {new Date().getFullYear()} Israel Habimana. All rights reserved.
          </div>
    </div>
  )
}

export default Footer