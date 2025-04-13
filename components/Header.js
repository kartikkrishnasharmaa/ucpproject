"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Computer Dictionary", path: "/glossary" },
    { name: "CheatSheet", path: "/cheatsheet" },
    { name: "MCQ", path: "/mcq" },
    { name: "Test", path: "/test" },
    { name: "Interview Prep", path: "/interview-question" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const mobileMenu = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const hoverEffect = {
    rest: { width: "0%", transition: { duration: 0.3 } },
    hover: { width: "100%", transition: { duration: 0.3 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/logo.png"
                width={140}
                height={40}
                alt="Logo"
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {navItems.map((navItem, index) => {
              const isActive = pathname === navItem.path;
              return (
                <motion.div
                  key={navItem.path}
                  className="relative"
                  variants={item}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Link
                    href={navItem.path}
                    className={`relative px-2 py-1.5 font-medium transition-colors ${
                      isActive
                        ? "text-blue-900 font-bold "
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {navItem.name}
                    {(hoveredItem === index || isActive) && (
                      <motion.span
                        layoutId="navHover"
                        className={`absolute left-0 bottom-0 h-0.5 ${
                          isActive ? "bg-blue-600" : "bg-blue-400"
                        }`}
                        initial={{ width: isActive ? "100%" : 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 180 },
              }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4"
              variants={mobileMenu}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div
                className="flex flex-col space-y-2 py-2"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {navItems.map((navItem) => {
                  const isActive = pathname === navItem.path;
                  return (
                    <motion.div key={navItem.path} variants={item}>
                      <Link
                        href={navItem.path}
                        className={`block px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center"
                        >
                          <span
                            className={`mr-2 ${
                              isActive ? "text-blue-600" : "text-gray-400"
                            }`}
                          >
                            →
                          </span>
                          {navItem.name}
                          {isActive && (
                            <span className="ml-2 text-blue-400">●</span>
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;