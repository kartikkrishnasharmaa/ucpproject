import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const compiler = () => {
  return (
    <>
      <section className="bg-blue-700 px-8 body-font">
        <div className="container mx-auto px-5 flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow ml-8 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Computer Dictionary
            </h1>
            <p className="text-white mb-8 leading-relaxed">
              Explore a comprehensive computer dictionary featuring all
              computer-related terms.
            </p>
            <div className="flex space-x-1">
              <Link href="/glossary">
                <button className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded-3xl">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-transparent mr-4 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-center rounded"
              alt="hero-banner"
              width={450}
              height={400}
              src="/Images/banner-author.png"
            />
          </div>
        </div>
      </section>
      <Link href="/interview-question" className="border-4 shadow-xl shadow-cyan-600 hover:shadow-indigo-700">
        <Image
          className="object-center mt-3 items-center mx-auto rounded"
          alt="hero-banner"
          width={1250}
          height={1000}
          src="/Images/prep.png"
        />
      </Link>

      <section className="px-8 body-font">
        <div className="container mx-auto px-5 flex md:flex-row flex-col items-center">
          <div className="bg-transparent mr-4 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-center rounded"
              alt="hero-banner"
              width={450}
              height={400}
              src="/Images/onlinetest.png"
            />
          </div>
          <div className="lg:flex-grow ml-8 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-700">
            Welcome to Our Online Computer Science Quiz Platform
            </h1>
            <p className="text-blue-700 mb-8 leading-relaxed">
            Test your knowledge across various subjects including algorithms, data structures, programming languages, and more. Whether you're a student, professional, or simply curious about the field, our quizzes offer an engaging way to learn and challenge yourself.
            </p>
            <div className="flex space-x-1">
              <Link href="/test">
                <button className="hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded-3xl">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default compiler;
