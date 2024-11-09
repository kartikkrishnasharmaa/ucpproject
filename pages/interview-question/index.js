import { useState } from "react";
import QueLayout from "../../components/QueLayout";
import Head from "next/head";
import Link from "next/link";
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

  // Get unique categories
  const categories = [
    ...new Set(mcqsubjects.map((subject) => subject.category)),
  ];

  // Filtered subjects based on selectedCategory
  const filteredSubjects = selectedCategory
    ? mcqsubjects.filter((subject) => subject.category === selectedCategory)
    : mcqsubjects;

  return (
    <QueLayout>
      <Head>
        <title>
          Interview Question- All Computer related terms| Unstop Computer
        </title>
        <meta
          name="description"
          content=" Here, you'll find a treasure trove of questions covering everything from programming languages to data structures and algorithms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="Keywords"
          content="HTML,Unstop Computer.in,UnstopComputers, Unstop Computer, UnstopComputers.in Python, CSS, SQL, JavaScript, How to, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, Node.js, React, Vue, Graphics, Angular, R, AI, Git, Data Science, Code Game, Tutorials, Programming, Web Development, Training, Learning, Quiz, Exercises, Courses, Lessons, References, Examples, Learn to code, Source code, Demos, Tips, Website"
        />
        <link
          rel="canonical"
          href="https://unstopcomputer.vercel.app/interview-question"
        />
        <meta
          property="og:image"
          content="https://unstopcomputer.vercel.app/Images/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta
          property="og:title"
          content="Interview Question- All Computer related terms | Unstop Computer"
        />
        <meta
          name="description"
          content=" Here, you'll find a treasure trove of questions covering everything from programming languages to data structures and algorithms."
        />
      </Head>
      <section id="content-wrapper">
        <div className="row">
          {/* Your existing code */}
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {/* Add a section for category filter */}
            <div className="container text-center mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                <div className="relative xl:container">
                  <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-4xl lg:w-auto lg:text-left xl:text-4xl dark:text-blue">
                    Top Interview Question with Answer
                  </h2>{" "}
                  <br className="lg:block hidden" />
                </div>
                <p>
                  Welcome to our Interview Questions and Answers hub for
                  Computer Science enthusiasts! Here, you'll find a treasure
                  trove of questions covering everything from programming
                  languages to data structures and algorithms. Whether you're
                  gearing up for a job interview or simply exploring new
                  concepts, we've got you covered. Dive in, test your knowledge,
                  and embark on a journey through the exciting world of Computer
                  Science. Happy learning!
                </p>
                <p className="items-center mt-7 text-center">
                  Select your course and start learning now
                </p>
              </div>
            </div>

            <div className="flex items-center mx-auto m-2">

              <div className="flex flex-col items-center md:flex-row mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`bg-white mt-1 md:mt-0 md:ml-1 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-white rounded-2xl`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
                {/* Add a button to clear the filter */}
                <button
                  className={`bg-white mt-1 md:mt-0 md:ml-1 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-white rounded-2xl`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Clear Filter
                </button>
              </div>
            </div>

            {/* Display filtered subjects */}
            {filteredSubjects.map((subject) => (
              <div key={subject.id} className="p-2 sm:w-1/2 w-full">
                <Link href={subject.link}>
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center cursor-pointer">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">
                      {subject.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </QueLayout>
  );
}
