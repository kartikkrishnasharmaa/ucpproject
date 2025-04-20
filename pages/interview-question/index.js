import { useState } from "react";
import QueLayout from "../../components/QueLayout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    { 
      id: 1, 
      name: "Data Structure", 
      category: ["Software Development"], 
      link: "/interview-question/data-structure", 
      image: "/Images/subject/data-structure.png", 
      gradient: "from-purple-500 to-indigo-500" 
    },
    { 
      id: 2, 
      name: "CSS", 
      category: ["Web Development"], 
      link: "/interview-question/css", 
      image: "/Images/subject/css.png", 
      gradient: "from-blue-400 to-blue-600" 
    },
    { 
      id: 3, 
      name: "HTML", 
      category: ["Web Development"], 
      link: "/interview-question/html", 
      image: "/Images/subject/html.png", 
      gradient: "from-orange-300 to-orange-500" 
    },
    { 
      id: 4, 
      name: "MERN Stack", 
      category: ["Web Development"], 
      link: "/interview-question/mern-stack", 
      image: "/Images/subject/react.png", 
      gradient: "from-green-500 to-teal-500" 
    },
    { 
      id: 5, 
      name: "Next Js", 
      category: ["Web Development"], 
      link: "/interview-question/nextjs", 
      image: "/Images/subject/nextjs.png", 
      gradient: "from-gray-700 to-gray-900" 
    },
    { 
      id: 6, 
      name: "Node Js", 
      category: ["Software Development"], 
      link: "/interview-question/nodejs", 
      image: "/Images/subject/nodejs.png", 
      gradient: "from-green-700 to-green-900" 
    },
    { 
      id: 7, 
      name: "React Js", 
      category: ["Web Development"], 
      link: "/interview-question/reactjs", 
      image: "/Images/subject/react.png", 
      gradient: "from-cyan-400 to-cyan-600" 
    },
    { 
      id: 8, 
      name: "Python", 
      category: ["Software Development", "Data Science"], 
      link: "/interview-question/python", 
      image: "/Images/subject/python.png", 
      gradient: "from-blue-500 to-blue-700" 
    },
    { 
      id: 9, 
      name: "MS Excel", 
      category: ["Data Analyst"], 
      link: "/interview-question/excel", 
      image: "/Images/subject/excel.png", 
      gradient: "from-green-600 to-green-800" 
    },
    { 
      id: 10, 
      name: "Microsoft Power BI", 
      category: ["Data Analyst"], 
      link: "/interview-question/powerbi", 
      image: "/Images/subject/powerbi.png", 
      gradient: "from-yellow-500 to-yellow-700" 
    },
    { 
      id: 11, 
      name: "Flutter", 
      category: ["Mobile Development"], 
      link: "/interview-question/flutter", 
      image: "/Images/subject/flutter.png", 
      gradient: "from-blue-300 to-blue-500" 
    },
    { 
      id: 12, 
      name: "React Native", 
      category: ["Mobile Development"], 
      link: "/interview-question/react-native", 
      image: "/Images/subject/reactnative.png", 
      gradient: "from-pink-500 to-purple-500" 
    },
    { 
      id: 13, 
      name: "Android Developer", 
      category: ["Mobile Development"], 
      link: "/interview-question/android-developer", 
      image: "/Images/subject/android.png", 
      gradient: "from-green-500 to-green-700" 
    },
    { 
      id: 14, 
      name: "PHP", 
      category: ["Web Development"], 
      link: "/interview-question/php", 
      image: "/Images/subject/php.png", 
      gradient: "from-indigo-500 to-indigo-700" 
    },
  ];
  const categories = [
    ...new Set(mcqsubjects.flatMap((subject) => subject.category)),
  ];

  const filteredSubjects = selectedCategory
    ? mcqsubjects.filter((s) =>
        Array.isArray(s.category)
          ? s.category.includes(selectedCategory)
          : s.category === selectedCategory
      )
    : mcqsubjects;

  return (
    <QueLayout>
      <Head>
        <title>Interview Questions | Learn with Unstop Computer</title>
        <meta
          name="description"
          content="Ace your technical interviews with top MCQs and coding interview questions. Learn Data Structures, Web Dev, Python, Power BI and more."
        />
      </Head>

      <section id="content-wrapper">
        <div className="sm:mx-auto sm:mb-2">
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
                Explore industry-relevant questions on Data Structures, Web Development, Python, and more.
              </p>
            </motion.div>

            {/* Category Filter Buttons */}
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

            {/* Subjects Grid */}
            <motion.div
              layout
              className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto px-4"
            >
              {filteredSubjects.map((subject) => (
                <motion.div
                  key={subject.id}
                  whileHover={{ scale: 1.03 }}
                  className="transition-all duration-300 transform hover:shadow-xl rounded-xl relative overflow-hidden"
                >
                  <Link href={subject.link}>
                    <div className="flex flex-col">
                      {/* Banner-style container */}
                      <div
                        className={`bg-gradient-to-br ${subject.gradient} w-full h-[150px] relative rounded-lg overflow-hidden`}
                      >
                        {/* Image with object-cover to maintain aspect ratio */}
                        <img
                          src={subject.image}
                          alt={subject.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="text-center mt-4 p-2">
                        <h3 className="text-xl font-semibold text-blue-700">
                          {subject.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </section>
    </QueLayout>
  );
};

export default Home;