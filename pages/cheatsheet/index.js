import CheatLayout from "../../components/cheatLayout";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const mcqsubjects = [
    {
      id: 1,
      name: "Angular Js",
      category: "Programming",
      link: "/cheatsheet/programming/angularjs",
    },
    {
      id: 2,
      name: "Asp.Net",
      category: "Programming",
      link: "/cheatsheet/programming/aspnet",
    },
    {
      id: 3,
      name: "Bootstrap",
      category: "Programming",
      link: "/cheatsheet/programming/bootstrap",
    },
    {
      id: 4,
      name: "CSS",
      category: "Programming",
      link: "/cheatsheet/programming/css",
    },
    {
      id: 5,
      name: "Express Js",
      category: "Programming",
      link: "/cheatsheet/programming/express",
    },
    {
      id: 6,
      name: "Go Language",
      category: "Programming",
      link: "/cheatsheet/programming/go-language",
    },
    {
      id: 7,
      name: "Visual Studio",
      category: "Softwares",
      link: "/cheatsheet/software/visual-studio",
    },
    {
      id: 8,
      name: "VLC Media Player",
      category: "Softwares",
      link: "/cheatsheet/software/vlc-media",
    },
    {
      id: 9,
      name: "MongoDB",
      category: "Database",
      link: "/cheatsheet/database/mongodb",
    },
    {
      id: 10,
      name: "ChatGpt",
      category: "Tools",
      link: "/cheatsheet/tools/chatgpt",
    },
    // Add more subjects here
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
    <CheatLayout>
      <Head>
        <title>Computer Science Cheat Sheet - Home | Unstop Computer</title>
        <meta
          name="description"
          content="An Online place where you can write code and test your code in real time without installing any additional softwares."
        />
        <link rel="icon" href="/Images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="website template" />
      </Head>
      <section id="content-wrapper">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto items-center sm:mb-2 -mx-2">
          <div className="container grid place-items-center text-center mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
              <div className="relative xl:container">
                <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-6xl lg:text-left xl:text-4xl dark:text-blue">
                  Computer Science Cheat Sheet{" "}
                </h2>{" "}
                <br className="lg:block hidden" />
              </div>
              <p className="mt-2">
                The Computer Science cheatsheet offers concise summaries of all
                major topics. It aids in understanding fundamental principles of
                Computer Science such as algorithms, data structures,
                programming languages, and computer architecture. This resource
                serves as a straightforward, quickly accessible reference
                suitable for educators, students, and professionals alike.
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
          <hr />
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
                  <span className="title-font font-medium">{subject.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </CheatLayout>
  );
}
