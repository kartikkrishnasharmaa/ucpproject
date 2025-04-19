import { useState } from "react";
import QueLayout from "../../components/QueLayout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    {
      id: 1,
      name: "Data Structure",
      category: "Software Development",
      link: "/interview-question/data-structure",
    },
    {
      id: 2,
      name: "CSS",
      category: "Web Development",
      link: "/interview-question/css",
    },
    {
      id: 3,
      name: "HTML",
      category: "Web Development",
      link: "/interview-question/html",
    },
    {
      id: 4,
      name: "MERN Stack",
      category: "Web Development",
      link: "/interview-question/mern-stack",
    },
    {
      id: 5,
      name: "Next Js",
      category: "Web Development",
      link: "/interview-question/nextjs",
    },
    {
      id: 6,
      name: "Node Js",
      category: "Software Development",
      link: "/interview-question/nodejs",
    },
    {
      id: 7,
      name: "React Js",
      category: "Web Development",
      link: "/interview-question/reactjs",
    },
    {
      id: 8,
      name: "Python",
      category: "Software Development",
      link: "/interview-question/python",
    },
    {
      id: 9,
      name: "MS Excel",
      category: "Data Science",
      link: "/interview-question/excel",
    },
    {
      id: 10,
      name: "Microsoft Power BI",
      category: "Data Science",
      link: "/interview-question/powerbi",
    },
    {
      id: 11,
      name: "Flutter",
      category: "Mobile Development",
      link: "/interview-question/flutter",
    },
    {
      id: 12,
      name: "React Native",
      category: "Mobile Development",
      link: "/interview-question/react-native",
    },
    {
      id: 13,
      name: "Android Developer",
      category: "Mobile Development",
      link: "/interview-question/android-developer",
    },
    {
      id: 14,
      name: "PHP",
      category: "Web Development",
      link: "/interview-question/php",
    },
  ];

  const categories = [
    ...new Set(mcqsubjects.map((subject) => subject.category)),
  ];
  const filteredSubjects = selectedCategory
    ? mcqsubjects.filter((s) => s.category === selectedCategory)
    : mcqsubjects;

  return (
    <QueLayout>
      <Head>
        <title>Interview Questions | Learn with Unstop Computer</title>
        <meta
          name="description"
          content="Ace your technical interviews with top MCQs and coding interview questions. Learn Data Structures, Web Dev, Python, Power BI and more."
        />
        <meta
          name="keywords"
          content="Interview Questions, MCQ, Data Structures, Python, React, MERN, HTML, CSS, Power BI, Unstop Computer"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unstopcomputer.vercel.app/interview-question"
        />
        <meta
          property="og:title"
          content="Top Interview Questions - Unstop Computer"
        />
        <meta
          property="og:description"
          content="Interview questions and answers hub for Data Science, Web Development, Software Development, and more."
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.vercel.app/Images/logo.png"
        />
      </Head>
      <section id="content-wrapper">
        <div>
          {/* Your existing code */}
          <div className="lg:w-4/5 sm:mx-auto sm:mb-2">
            <section className="mt-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
                  Top Interview Questions with Answers
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                  Explore industry-relevant questions on Data Structures, Web
                  Development, Python, and more. Prepare smart and succeed!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-3 mt-10"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="bg-white border border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300"
                  >
                    {category}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-white border border-gray-500 text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300"
                >
                  Clear Filter
                </button>
              </motion.div>

              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto"
              >
                {filteredSubjects.map((subject) => (
                  <motion.div
                    key={subject.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <Link href={subject.link}>
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            className="text-blue-700 w-6 h-6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                            <path d="M22 4L12 14.01l-3-3" />
                          </svg>
                        </div>
                        <span className="font-semibold text-lg text-blue-900">
                          {subject.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
        </div>
      </section>
    </QueLayout>
  );
}
