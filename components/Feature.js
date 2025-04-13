import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Feature = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressBar = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Floating tech bubbles background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-100 opacity-40 dark:bg-indigo-900"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.3, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section className="text-gray-600 body-font relative z-0">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            className="flex flex-col"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div className="h-1 bg-gray-200 rounded overflow-hidden mb-8">
              <motion.div
                className="w-24 h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                variants={progressBar}
              />
            </motion.div>

            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <motion.h1
                className="sm:w-2/5 text-gray-900 title-font text-3xl font-extrabold mb-2 sm:mb-0 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                variants={item}
              >
                Why Choose UnstopComputer?
              </motion.h1>

              <motion.p
                className="sm:w-3/5 leading-relaxed text-lg sm:pl-10 pl-0 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100"
                variants={item}
              >
                Whether you want to start a career in coding, advance your
                current skills, or simply have fun with programming, we are here
                to help you. Join us today and start your coding journey with
                Unstop Computer!
              </motion.p>
            </div>
          </motion.div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {[
              {
                title: "Practice Coding",
                desc: "The only way to learn to program is by writing code. We provide you with a platform to practice your coding skills.",
                img: "/Images/first.png",
                bg: "from-blue-50 to-indigo-50",
                overlay: "from-blue-50 to-indigo-100",
              },
              {
                title: "Expert Content",
                desc: "A group of experts continually working to create programming resources that are accurate and easier to understand.",
                img: "/Images/second.png",
                bg: "from-purple-50 to-pink-50",
                overlay: "from-purple-50 to-pink-100",
              },
              {
                title: "Beginner Friendly",
                desc: "Programming tutorials and examples written in simple, understandable language for beginners.",
                img: "/Images/third.png",
                bg: "from-green-50 to-teal-50",
                overlay: "from-green-50 to-teal-100",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="p-4 md:w-1/3 sm:mb-0 mb-6"
                variants={item}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <motion.div
                  className="rounded-lg overflow-hidden relative bg-white shadow-lg flex flex-col h-full min-h-[480px]"
                  variants={cardHover}
                >
                  {/* Background pulse animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.overlay} opacity-5`}
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                  />

                  {/* Image section */}
                  <motion.div
                    whileHover="hover"
                    variants={imageHover}
                    className="w-full flex-1 flex items-center justify-center p-4"
                  >
                    <Image
                      alt={card.title}
                      src={card.img}
                      className="object-contain w-full h-auto max-h-60"
                      width={500}
                      height={300}
                      quality={100}
                      priority
                    />
                  </motion.div>

                  {/* Text section */}
                  <div
                    className={`bg-gradient-to-r ${card.bg} p-4 border-t border-gray-100`}
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
