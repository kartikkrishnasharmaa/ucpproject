import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const Feature = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressBar = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Floating tech bubbles background - z-index set to -10 */}
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
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <section className="text-gray-600 body-font relative z-0"> {/* Changed to z-0 */}
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
                className="sm:w-2/5 text-gray-900 title-font text-2xl font-bold mb-2 sm:mb-0"
                variants={item}
              >
                Why UnstopComputer ?
              </motion.h1>
              
              <motion.p 
                className="sm:w-3/5 leading-relaxed font-bold sm:pl-10 pl-0"
                variants={item}
              >
                Whether you want to start a career in coding, advance your current skills, or simply have fun with programming, we are here to help you. Join us today and start your coding journey with Unstop Computer!
              </motion.p>
            </div>
          </motion.div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <motion.div 
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
              variants={item}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div 
                className="rounded-lg h-64 overflow-hidden relative bg-white shadow-lg"
                variants={cardHover}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-5"
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  whileHover="hover"
                  variants={imageHover}
                >
                  <Image 
                    alt="Practice Coding" 
                    className="object-contain object-center h-full w-full" 
                    width={500}  // Increased quality
                    height={300} 
                    src="/Images/first.png" 
                    quality={100} // Max quality
                    priority // Preload important images
                  />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-base leading-relaxed mt-4 px-2 font-medium text-gray-700"
                animate={{
                  x: [0, 5, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                The only way to learn to program is by writing code. We provide you with a platform to practice your coding skills.
              </motion.p>
            </motion.div>

            <motion.div 
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
              variants={item}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div 
                className="rounded-lg h-64 overflow-hidden relative bg-white shadow-lg"
                variants={cardHover}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 opacity-90"
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  whileHover="hover"
                  variants={imageHover}
                >
                  <Image 
                    alt="Expert Content" 
                    className="object-contain object-center h-full w-full" 
                    width={500} 
                    height={300}
                    src="/Images/second.png" 
                    quality={100}
                    priority
                  />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-base leading-relaxed mt-4 px-2 font-medium text-gray-700"
                animate={{
                  x: [0, -3, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                A group of experts continually working to create programming resources that are accurate and easier to understand.
              </motion.p>
            </motion.div>

            <motion.div 
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
              variants={item}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div 
                className="rounded-lg h-64 overflow-hidden relative bg-white shadow-lg"
                variants={cardHover}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-100 opacity-40"
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                />
                <motion.div
                  whileHover="hover"
                  variants={imageHover}
                >
                  <Image 
                    alt="Beginner Friendly" 
                    className="object-contain object-center h-full w-full" 
                    width={500} 
                    height={300}
                    src="/Images/third.png" 
                    quality={100}
                    priority
                  />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-base leading-relaxed mt-4 px-2 font-medium text-gray-700"
                animate={{
                  x: [0, 4, 0],
                  transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                Programming tutorials and examples written in simple, understandable language for beginners.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;