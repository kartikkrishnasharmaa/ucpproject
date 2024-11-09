import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24 flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Learn Anytime &<br />Learn from Anywhere</h1>
          <p className="mb-8 flex-wrap">Learn the essentials of computer programming technologies from the Basic to Advanced topics, along with real life practice examples and useful references at free of cost.</p>
          <div>
            <p className="inline-block m-2 whitespace-nowrap rounded-xl py-1 bg-blue-700 px-2 text-white ml-2  text-center font-bold text-success-700 hover:shadow-xl hover:transform hover:scale-105 duration-300"><Link href="/mcq">MCQ</Link>
            </p>
            <p className="inline-block m-2 whitespace-nowrap rounded-xl py-1 bg-blue-700 px-2 text-white ml-2  text-center font-bold text-success-700 hover:shadow-xl hover:transform hover:scale-105 duration-300"><Link href="/interview-question">Interview Preparation</Link>
            </p>
            <p className="inline-block m-2 whitespace-nowrap rounded-xl py-1 bg-blue-700 px-2 text-white ml-2  text-center font-bold text-success-700 hover:shadow-xl hover:transform hover:scale-105 duration-300"><Link href="/test">Test</Link>
            </p>
            <p className="inline-block m-2 whitespace-nowrap rounded-xl py-1 bg-blue-700 px-2 text-white ml-2  text-center font-bold text-success-700 hover:shadow-xl hover:transform hover:scale-105 duration-300"><Link href="/cheatsheet">Cheatsheet</Link>
            </p>
          </div>


        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded" alt="hero-banner" width={ 550 } height={ 500 } src="/Images/hero.png" />
        </div>
      </div>
    </section >
  );
};

export default Hero;