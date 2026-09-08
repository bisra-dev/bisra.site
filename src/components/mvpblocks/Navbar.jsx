import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Simple dark-mode detection (replaces next-themes' useTheme).
  // If your app has its own theme context/hook, swap this out for that.
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to a section, accounting for the mobile menu's
  // collapse animation and the fixed navbar's height.
  const handleNavClick = (e, href) => {
    e.preventDefault();

    const wasMobileMenuOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    const navbarOffset = 80; // adjust to match your actual navbar height in px

    const scrollToTarget = () => {
      const y =
        target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    if (wasMobileMenuOpen) {
      // wait for the mobile menu's exit animation (0.3s) to finish
      // so the collapsing layout doesn't interfere with the scroll
      setTimeout(scrollToTarget, 300);
    } else {
      scrollToTarget();
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.header
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] lg:w-[100%] sm:top-6 max-w-6xl z-50 rounded-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        backgroundColor: isScrolled
          ? "rgba(70, 30, 150, 0.3)"
          : "rgba(255, 255, 255, 0)",
        boxShadow: isScrolled
          ? "0 8px 32px rgba(0, 0, 0, 0)"
          : "0 8px 32px rgba(0, 0, 0, 0)",
        border: isScrolled
          ? "1px solid rgba(124, 58, 237, 0.4)"
          : "1px solid rgba(255, 255, 255, 0)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}>
      <div className="mx-auto max-w-6xl w-[100%] px-4 sm:px-5 lg:px-6">
        <div className="flex h-14 items-center justify-between lg:h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="/" className="flex items-center space-x-2">
              <p className="text-[20px] leading-[28px] font-[700] font-semibold font-syne normal-case flex items-center gap-1">
                <img src="/favicon.svg" alt="dev" className="h-12 w-12 object-contain border-2 border-blue-200 bg-white rounded-full shadow-md shadow-blue-600" />
                <span className="text-blue-600">BISRA</span> <span className="text-mist-900">•</span>
              </p>
            </a>
          </motion.div>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground flex items-center space-x-1 font-medium transition-colors duration-200">
                  <span className="font-inter text-mist-900 text-[16px] font-[500] leading-[20px] font-bold hover:text-white hover:bg-blue-600 hover:rounded-4xl hover:py-2 px-4">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                </a>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="border-border bg-background/95 absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border shadow-xl backdrop-blur-lg"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="hover:bg-muted block px-4 py-3 transition-colors duration-200">
                            <div className="text-foreground font-medium">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-muted-foreground text-sm">
                                {dropdownItem.description}
                              </div>
                            )}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r bg-blue-600 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg">
                <span className="font-inter text-white text-[16px] font-[500] leading-[20px]">Hire Me</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.button
            className="hover:bg-violet-800 rounded-lg p-2 transition-colors duration-200 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden -mx-4 sm:-mx-5"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              <div className="border-border mt-2 mb-6 mx-4 sm:mx-5 space-y-2 rounded-3xl border px-3 py-4 shadow-xl bg-white">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-[130px] hover:bg-blue-600 rounded-4xl block px-6 py-2 font-syne font-bold transition-colors duration-200"
                    onClick={(e) => handleNavClick(e, item.href)}>
                    {item.name}
                  </a>
                ))}
                <div className="space-y-2 px-2 py-2">
                  <a
                    href="#contact"
                    className="block w-full rounded-4xl bg-gradient-to-r bg-blue-600 py-2.5 text-center font-inter font-medium text-white transition-all duration-200 hover:shadow-lg"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}