import CheatLayout from "../../../components/cheatLayout";
import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image'
export default function Home() {
    return (
        <CheatLayout>
            <Head>
                <title>Computer Science Cheat Sheet - Home | Unstop Computer</title>
                <meta name="description" content="An Online place where you can write code and test your code in real time without installing any additional softwares." />
                <link rel="icon" href="/Images/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="website template" />
            </Head>
            <section id="content-wrapper">
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="container text-center mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                            <div className="relative xl:container">
                                <h2 className=" text-blue-700 text-4xl text-center sm:text-xl md:text-6xl lg:text-left xl:text-5xl dark:text-blue">Visual Studio Cheat Sheet </h2> <br className="lg:block hidden" />
                            </div>
                        </div>
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
                    </div>

                </div>
            </section>
        </CheatLayout>
    );
}
