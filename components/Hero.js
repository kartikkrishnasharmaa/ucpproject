import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  // Coding icons data
  const codingIcons = [
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "</>", name: "html" },
    { icon: "{}", name: "javascript" },
    { icon: "() =>", name: "function" },
    { icon: "const", name: "variable" },
    { icon: "div", name: "div" },
    { icon: "class", name: "class" },
    { icon: "import", name: "import" },
    { icon: "export", name: "export" },
    { icon: "if", name: "if" },
    { icon: "for", name: "loop" },
    { icon: "try", name: "try" },
    { icon: "async", name: "async" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Random floating animation for background icons
  const floatingIcon = {
    initial: {
      y: 0,
      x: 0,
      opacity: 0,
    },
    animate: (i) => ({
      y: [0, -20, 0, 20, 0],
      x: [0, 15, -10, 15, 0],
      opacity: [0, 0.8, 0.8, 0.8, 0],
      transition: {
        duration: 10 + Math.random() * 20,
        repeat: Infinity,
        delay: i * 2,
        ease: "linear",
      },
    }),
  };

  return (
    <section className="text-gray-600 body-font relative overflow-hidden">
      {/* Floating coding icons background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {codingIcons.map((icon, i) => (
          <motion.span
            key={i}
            className={`absolute text-gray-200 dark:text-gray-700 font-mono text-xl font-bold select-none`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={floatingIcon}
            initial="initial"
            animate="animate"
            custom={i}
          >
            {icon.icon}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-5 py-24 flex md:flex-row flex-col items-center relative z-10">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-800 font-sans"
            variants={itemVariants}
          >
            Learn Anytime &<br className="hidden md:inline" />{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Learn Anywhere
            </span>
          </motion.h1>

          <motion.p
            className="mb-8 flex-wrap relative z-10 text-lg text-gray-600 leading-relaxed font-sans max-w-lg"
            variants={itemVariants}
          >
            Master computer programming technologies from{" "}
            <span className="font-semibold text-gray-700">
              Basic to Advanced
            </span>
            , with real-world practice examples and useful references -{" "}
            <span className="italic text-indigo-600">completely free</span>.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start relative z-10 gap-3"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/mcq">
                <motion.button
                  className="whitespace-nowrap rounded-xl py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-indigo-700 font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-sans"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  MCQ
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/interview-question">
                <motion.button
                  className="whitespace-nowrap rounded-xl py-3 px-6 text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-sans"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Interview Prep
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/test">
                <motion.button
                  className="whitespace-nowrap rounded-xl py-3 px-6 text-white bg-gradient-to-r from-emerald-600 to-teal-600 font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-sans"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Test
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/cheatsheet">
                <motion.button
                  className="whitespace-nowrap rounded-xl py-3 px-6 text-white bg-gradient-to-r from-amber-500 to-orange-500 font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-sans"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Cheatsheet
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image section */}
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero-banner"
            width={550}
            height={500}
            src="/Images/hero.png"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
