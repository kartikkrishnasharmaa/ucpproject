import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const Mcq = () => {
    return (
        <section className="text-gray-600 body-font z-10">
            <div className="container px-5 mx-auto">
                <div className="flex mb-2">
                    <h1 className='text-center mt-4 text-2xl font-bold mb-3'>Multiple Choice Question</h1>
                    <Link href="/mcq" className='bg-white mt-4 lg:mr-10 text-blue-700 px-4 py-2 rounded-lg mx-auto border-sky-400 border-1'>View All</Link>
                </div>

                <div className="mx-auto grid m  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/html-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border align-center border-gray-100 shadow-sm' src="/Images/html.png" width="75" height="75" alt='html' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-xl ">HTML</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/dbms-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border border-gray-100 shadow-sm' src="/Images/dbmss.png" width="75" height="75" alt='dbms' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-xl ">DBMS</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-2xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/networking-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border border-gray-100 shadow-sm' src="/Images/networking.png" width="75" height="75" alt='networking' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-xl "> Computer Networking</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>

                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/python-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border border-gray-100 shadow-sm' src="/Images/pythonn.png" width="75" height="75" alt='python' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-2xl ">Python</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/css-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border border-gray-100 shadow-sm' src="/Images/css3.png" width="75" height="75" alt='python' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-2xl ">CSS</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/javascript-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border border-gray-100 shadow-sm' src="/Images/javascript.png" width="75" height="75" alt='python' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-2xl ">JavaScript</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/c-language">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border border-gray-100 shadow-sm' src="/Images/c-programming.png" width="75" height="75" alt='python' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-2xl ">C Language</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>
                    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                        <Link href="/mcq/mongodb-mcq">
                            <div className="relative flex justify-center overflow-hidden rounded-xl">
                                <Image className='rounded-full border border-gray-100 shadow-sm' src="/Images/mongodb.png" width="75" height="75" alt='python' />
                                <div className="ml-6 p-2">
                                    <h1 className="text-slate-700 text-2xl ">MongoDB</h1>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="w-full inline-block px-6 py-2 border-2 border-sky-400 text-blue-700 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Explore</button>
                            </div>
                        </Link>
                    </article>
                </div>
                <hr className="h-px mt-6 bg-gray-200 border-0 dark:bg-blue-700"></hr>

            </div>
        </section>
    );
};

export default Mcq;