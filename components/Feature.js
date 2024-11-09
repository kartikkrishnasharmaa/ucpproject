import Image from 'next/image';
import React from 'react';
const Feature = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-24 h-full bg-indigo-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-gray-900 title-font text-2xl font-bold mb-2 sm:mb-0">Why UnstopComputer ?</h1>
                            <p className="sm:w-3/5 leading-relaxed font-bold sm:pl-10 pl-0">Whether you want to start a career in coding, advance your current skills, or simply have fun with programming, we are here to help you. Join us today and start your coding journey with Unstop Computer!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center" width={ 300 } height={ 100 } src="/Images/first.png" />
                            </div>

                            <p className="text-base leading-relaxed mt-2 ">The only way to learn to program is by writing code. We provide you with a platform to practice your coding skills.</p>

                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center" width={ 300 } height={ 100 } src="/Images/second.png" />
                            </div>

                            <p className="text-base leading-relaxed mt-2">A group of experts continually working to create programming resources that are accurate and easier to understand.</p>

                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="object-cover object-center" width={ 300 } height={ 100 } src="/Images/third.png" />
                            </div>

                            <p className="text-base leading-relaxed mt-2">Programming tutorials and examples written in simple, understandable language for beginners.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Feature;